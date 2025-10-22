/**
 * POLL API - Google Apps Script
 * Voor: Strategisch Management Week 6 - Interactive Poll
 *
 * Functionaliteit:
 * - doGet(): Resultaten ophalen (GET request)
 * - doPost(): Stemmen registreren (POST request)
 * - resetPoll(): Poll resetten naar 0
 * - onOpen(): Custom menu toevoegen aan Sheet
 *
 * Sheet Structuur Vereist:
 * - Sheet naam: "Pre-Poll", "Post-Poll", "Routine-Current", "Routine-Future"
 * - Rij 1: Headers (pre-a, pre-b, pre-c, pre-d / routine1-a, routine1-b, etc.)
 * - Rij 2: Counts (getallen, start bij 0)
 */

/**
 * doGet - GET endpoint voor resultaten ophalen
 *
 * Parameters:
 *   e.parameter.poll - Poll type: 'pre', 'post', 'routine1', of 'routine2'
 *
 * Returns:
 *   JSON object met counts per optie
 *   Voorbeeld: {"pre-a": 5, "pre-b": 12, "pre-c": 3, "pre-d": 1}
 *
 * Gebruik:
 *   GET https://script.google.com/.../exec?poll=pre
 */
function doGet(e) {
  try {
    // Check voor reset action
    const action = e.parameter.action;
    const pollType = e.parameter.poll || 'pre';

    if (action === 'reset') {
      return handleReset(pollType);
    }

    // Bepaal sheet naam op basis van poll type
    const sheetName =
      pollType === 'pre' ? 'Pre-Poll' :
      pollType === 'post' ? 'Post-Poll' :
      pollType === 'routine1' ? 'Routine-Current' :
      pollType === 'routine2' ? 'Routine-Future' :
      'Pre-Poll'; // fallback

    // Open de spreadsheet en vind de juiste sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);

    // Check of sheet bestaat
    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({
          error: 'Sheet not found',
          message: `Sheet "${sheetName}" bestaat niet. Check of de naam correct is.`
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Lees data uit sheet (rij 1 = headers, rij 2 = counts)
    const dataRange = sheet.getDataRange();
    const data = dataRange.getValues();

    // Check of sheet minimaal 2 rijen heeft
    if (data.length < 2) {
      return ContentService
        .createTextOutput(JSON.stringify({
          error: 'Invalid sheet structure',
          message: 'Sheet moet minimaal 2 rijen hebben (headers + counts)'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Bouw result object: {header: count, ...}
    const headers = data[0]; // Eerste rij = headers
    const counts = data[1];  // Tweede rij = counts
    const result = {};

    for (let i = 0; i < headers.length; i++) {
      const header = String(headers[i]).trim();
      const count = parseInt(counts[i]) || 0; // Default naar 0 als geen getal

      if (header) { // Negeer lege headers
        result[header] = count;
      }
    }

    // Log voor debugging (zichtbaar in Apps Script → Executions)
    console.log(`doGet: poll=${pollType}, results=${JSON.stringify(result)}`);

    // Return JSON response
    return ContentService
      .createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Error handling
    console.error('doGet error:', error);

    return ContentService
      .createTextOutput(JSON.stringify({
        error: 'Internal server error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


/**
 * doPost - POST endpoint voor stemmen registreren
 *
 * Parameters:
 *   e.parameter.poll - Poll type: 'pre', 'post', 'routine1', of 'routine2'
 *   e.parameter.option - Optie: 'a', 'b', 'c', of 'd'
 *
 * Returns:
 *   JSON object met success status en nieuwe waarde
 *   Voorbeeld: {"success": true, "option": "pre-a", "newValue": 6}
 *
 * Gebruik:
 *   POST https://script.google.com/.../exec?poll=pre&option=a
 */
function doPost(e) {
  try {
    // Haal parameters op
    const pollType = e.parameter.poll || 'pre';
    const option = e.parameter.option;

    // Valideer option parameter
    if (!option || !['a', 'b', 'c', 'd'].includes(option.toLowerCase())) {
      return ContentService
        .createTextOutput(JSON.stringify({
          error: 'Invalid option',
          message: 'Option moet "a", "b", "c", of "d" zijn'
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Bepaal sheet naam en header naam
    const sheetName =
      pollType === 'pre' ? 'Pre-Poll' :
      pollType === 'post' ? 'Post-Poll' :
      pollType === 'routine1' ? 'Routine-Current' :
      pollType === 'routine2' ? 'Routine-Future' :
      'Pre-Poll'; // fallback
    const headerName = `${pollType}-${option.toLowerCase()}`;

    // Open spreadsheet en sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);

    // Check of sheet bestaat
    if (!sheet) {
      // List all available sheets for debugging
      const availableSheets = spreadsheet.getSheets().map(s => s.getName());

      return ContentService
        .createTextOutput(JSON.stringify({
          error: 'Sheet not found',
          message: `Sheet "${sheetName}" bestaat niet`,
          requestedPollType: pollType,
          requestedSheetName: sheetName,
          availableSheets: availableSheets
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Vind de kolom voor deze optie
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

    // Trim all headers and convert to strings for comparison
    const trimmedHeaders = headers.map(h => String(h).trim());
    const colIndex = trimmedHeaders.findIndex(h => h === headerName);

    // Check of header gevonden is
    if (colIndex === -1) {
      return ContentService
        .createTextOutput(JSON.stringify({
          error: 'Header not found',
          message: `Header "${headerName}" niet gevonden in rij 1. Check sheet structuur.`,
          availableHeaders: trimmedHeaders,
          lookingFor: headerName
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Column index is 0-based, maar sheet.getRange is 1-based
    const colNumber = colIndex + 1;

    // Haal huidige waarde op (rij 2)
    const currentValue = sheet.getRange(2, colNumber).getValue();
    const currentCount = parseInt(currentValue) || 0;

    // Increment waarde
    const newCount = currentCount + 1;
    sheet.getRange(2, colNumber).setValue(newCount);

    // Log voor debugging
    console.log(`doPost: poll=${pollType}, option=${option}, ${currentCount} → ${newCount}`);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        option: headerName,
        previousValue: currentCount,
        newValue: newCount
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Error handling
    console.error('doPost error:', error);

    return ContentService
      .createTextOutput(JSON.stringify({
        error: 'Internal server error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


/**
 * handleReset - Reset endpoint via doGet
 *
 * Parameters:
 *   pollType - 'pre', 'post', 'routine1', of 'routine2'
 *
 * Returns:
 *   JSON response met success status
 *
 * Gebruik:
 *   GET https://script.google.com/.../exec?poll=pre&action=reset
 */
function handleReset(pollType) {
  try {
    // Bepaal sheet naam
    const sheetName =
      pollType === 'pre' ? 'Pre-Poll' :
      pollType === 'post' ? 'Post-Poll' :
      pollType === 'routine1' ? 'Routine-Current' :
      pollType === 'routine2' ? 'Routine-Future' :
      'Pre-Poll'; // fallback

    // Open spreadsheet en sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);

    // Check of sheet bestaat
    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({
          error: 'Sheet not found',
          message: `Sheet "${sheetName}" bestaat niet`
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Haal aantal kolommen op
    const numCols = sheet.getLastColumn();

    // Zet alle values in rij 2 op 0
    const range = sheet.getRange(2, 1, 1, numCols);
    const values = Array(numCols).fill(0);
    range.setValues([values]);

    // Log
    console.log(`handleReset: ${pollType} poll gereset (${numCols} kolommen)`);

    // Return success
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: `${sheetName} gereset`,
        poll: pollType,
        columnsReset: numCols
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('handleReset error:', error);

    return ContentService
      .createTextOutput(JSON.stringify({
        error: 'Reset failed',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}


/**
 * resetPoll - Reset alle counts naar 0 voor een specifieke poll
 *
 * Parameters:
 *   pollType - 'pre', 'post', 'routine1', of 'routine2'
 *
 * Returns:
 *   Object met success status
 *
 * Gebruik:
 *   - Via Apps Script editor: Tools → Script editor → Run → resetPoll
 *   - Of via custom menu (zie onOpen functie)
 */
function resetPoll(pollType) {
  try {
    // Bepaal sheet naam
    const sheetName =
      pollType === 'pre' ? 'Pre-Poll' :
      pollType === 'post' ? 'Post-Poll' :
      pollType === 'routine1' ? 'Routine-Current' :
      pollType === 'routine2' ? 'Routine-Future' :
      'Pre-Poll'; // fallback

    // Open spreadsheet en sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(sheetName);

    // Check of sheet bestaat
    if (!sheet) {
      throw new Error(`Sheet "${sheetName}" niet gevonden`);
    }

    // Haal aantal kolommen op
    const numCols = sheet.getLastColumn();

    // Zet alle values in rij 2 op 0
    const range = sheet.getRange(2, 1, 1, numCols);
    const values = Array(numCols).fill(0);
    range.setValues([values]);

    // Log
    console.log(`resetPoll: ${pollType} poll gereset (${numCols} kolommen)`);

    // Toon melding aan gebruiker
    SpreadsheetApp.getUi().alert(`✅ ${sheetName} gereset!\n\nAlle counts zijn nu 0.`);

    return { success: true, message: `${sheetName} gereset` };

  } catch (error) {
    console.error('resetPoll error:', error);
    SpreadsheetApp.getUi().alert(`❌ Error: ${error.toString()}`);
    return { success: false, error: error.toString() };
  }
}


/**
 * resetPrePoll - Wrapper functie voor custom menu
 */
function resetPrePoll() {
  resetPoll('pre');
}


/**
 * resetPostPoll - Wrapper functie voor custom menu
 */
function resetPostPoll() {
  resetPoll('post');
}


/**
 * resetRoutine1Poll - Wrapper functie voor custom menu
 */
function resetRoutine1Poll() {
  resetPoll('routine1');
}


/**
 * resetRoutine2Poll - Wrapper functie voor custom menu
 */
function resetRoutine2Poll() {
  resetPoll('routine2');
}


/**
 * onOpen - Voegt custom menu toe aan Google Sheet
 *
 * Deze functie draait automatisch elke keer dat de spreadsheet wordt geopend.
 * Het voegt een "Poll Actions" menu toe aan de menu bar.
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();

  ui.createMenu('Poll Actions')
    .addItem('📊 Reset Pre-Poll', 'resetPrePoll')
    .addItem('📊 Reset Post-Poll', 'resetPostPoll')
    .addSeparator()
    .addItem('📊 Reset Routine Poll 1', 'resetRoutine1Poll')
    .addItem('📊 Reset Routine Poll 2', 'resetRoutine2Poll')
    .addSeparator()
    .addItem('ℹ️ Info', 'showInfo')
    .addToUi();
}


/**
 * showInfo - Toont informatie over de poll API
 */
function showInfo() {
  const ui = SpreadsheetApp.getUi();

  const message = `
📊 POLL API INFORMATIE

Deze spreadsheet is geconfigureerd als Poll API backend.

ENDPOINTS:
• GET  ?poll=pre/post/routine1/routine2  → Haal resultaten op
• POST ?poll=pre/post/routine1/routine2&option=a/b/c/d → Registreer stem

SHEET STRUCTUUR:
• Sheet: "Pre-Poll", "Post-Poll", "Routine-Current", "Routine-Future"
• Rij 1: Headers (pre-a, pre-b, pre-c, pre-d)
• Rij 2: Counts (getallen)

GEBRUIK:
1. Deploy: Deploy → New deployment → Web app
2. Copy URL
3. Gebruik URL in je HTML poll pagina

RESET:
• Menu: Poll Actions → Reset Pre-Poll/Post-Poll
• Of: Run resetPoll('pre') in script editor

MEER INFO:
• Check google-sheets-setup-guide.md
• Check Apps Script documentation
  `;

  ui.alert('Poll API Info', message, ui.ButtonSet.OK);
}


/**
 * testGet - Test functie voor doGet (voor debugging)
 *
 * Run deze functie in Apps Script editor om doGet te testen
 */
function testGet() {
  const testEvent = {
    parameter: {
      poll: 'pre'
    }
  };

  const response = doGet(testEvent);
  const content = response.getContent();

  console.log('testGet response:', content);
  Logger.log(content);

  return JSON.parse(content);
}


/**
 * testPost - Test functie voor doPost (voor debugging)
 *
 * Run deze functie in Apps Script editor om doPost te testen
 */
function testPost() {
  const testEvent = {
    parameter: {
      poll: 'pre',
      option: 'a'
    }
  };

  const response = doPost(testEvent);
  const content = response.getContent();

  console.log('testPost response:', content);
  Logger.log(content);

  return JSON.parse(content);
}


/**
 * testRoutine1Post - Test functie voor routine1 poll (voor debugging)
 *
 * Run deze functie in Apps Script editor om routine1 poll te testen
 */
function testRoutine1Post() {
  const testEvent = {
    parameter: {
      poll: 'routine1',
      option: 'b'
    }
  };

  const response = doPost(testEvent);
  const content = response.getContent();

  console.log('testRoutine1Post response:', content);
  Logger.log(content);

  return JSON.parse(content);
}


/**
 * debugSheetHeaders - Debug functie om alle headers te tonen
 *
 * Run deze functie om te zien wat er ECHT in de sheet staat
 */
function debugSheetHeaders() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName('Routine-Current');

  if (!sheet) {
    Logger.log('ERROR: Sheet "Routine-Current" niet gevonden!');
    Logger.log('Beschikbare sheets: ' + spreadsheet.getSheets().map(s => s.getName()).join(', '));
    return;
  }

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];

  Logger.log('=== DEBUG: Routine-Current Headers ===');
  Logger.log('Aantal kolommen: ' + headers.length);

  headers.forEach((header, index) => {
    Logger.log(`Kolom ${index + 1}: "${header}" (type: ${typeof header}, length: ${String(header).length})`);
    Logger.log(`  - Trimmed: "${String(header).trim()}"`);
    Logger.log(`  - Char codes: ${Array.from(String(header)).map(c => c.charCodeAt(0)).join(',')}`);
  });

  Logger.log('\n=== Verwachte Headers ===');
  ['routine1-a', 'routine1-b', 'routine1-c', 'routine1-d'].forEach((expected, index) => {
    const actual = String(headers[index] || '').trim();
    const match = actual === expected ? '✅ MATCH' : '❌ MISMATCH';
    Logger.log(`${match}: Expected "${expected}", Got "${actual}"`);
  });
}


/**
 * INSTALLATIE INSTRUCTIES
 *
 * 1. Kopieer deze hele code
 * 2. Open je Google Sheet
 * 3. Extensions → Apps Script
 * 4. Plak code (vervang bestaande code)
 * 5. Save (Ctrl+S)
 * 6. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Access: Anyone
 * 7. Copy deployment URL
 * 8. Gebruik URL in poll-test-sheets.html
 *
 * TESTEN:
 * - Run testGet() in editor → check Logger
 * - Run testPost() in editor → check Sheet updates
 * - Run resetPoll('pre') → check Sheet resets
 *
 * SHEET STRUCTUUR:
 * Pre-Poll sheet:
 *   | pre-a | pre-b | pre-c | pre-d |
 *   |   0   |   0   |   0   |   0   |
 *
 * Post-Poll sheet:
 *   | post-a | post-b | post-c | post-d |
 *   |    0   |    0   |    0   |    0   |
 *
 * QUOTA LIMITS:
 * - 20,000 URL requests per day
 * - 90 writes per minute
 * - Ruim voldoende voor classroom gebruik
 *
 * TROUBLESHOOTING:
 * - Check Sheet namen (exact "Pre-Poll" en "Post-Poll")
 * - Check headers (exact "pre-a", "pre-b", etc.)
 * - Check rij 2 bevat alleen getallen
 * - Check deployment: Execute as Me, Access Anyone
 * - Check Executions log in Apps Script (links menu)
 *
 * SUPPORT:
 * - Google Apps Script docs: developers.google.com/apps-script
 * - Check google-sheets-setup-guide.md
 */
