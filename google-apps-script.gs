// ─────────────────────────────────────────────
// Google Apps Script — reçoit les inscriptions du site et les ajoute à la Sheet
// À coller dans : Google Sheet → Extensions → Apps Script (fichier Code.gs)
// Ce fichier n'est pas utilisé par le site, il sert juste de copie de référence.
// ─────────────────────────────────────────────

const SHEET_NAME = 'Inscriptions';

const HEADERS = [
  'Horodatage', 'Branche', 'Prénom', 'Nom', 'Email IESEG',
  'Numéro étudiant', 'Nom Messenger', 'Profil / expérience'
];

// À lancer une fois à la main (Exécuter → initialiser) : crée l'onglet "Inscriptions" avec ses en-têtes
function initialiser() {
  const sheet = getSheet_();
  SpreadsheetApp.getActiveSpreadsheet().setActiveSheet(sheet);
  Logger.log('Onglet prêt : ' + sheet.getName());
}

// Test manuel (Exécuter → testInscription) : simule une inscription envoyée par le site
function testInscription() {
  const fake = {
    postData: {
      contents: JSON.stringify({
        branche: 'Branche Rap',
        prenom: 'TEST',
        nom: 'TEST',
        email: 'test@ieseg.fr',
        numero_etudiant: '123456',
        messenger: 'Test Messenger',
        profil: 'Ligne de test, à supprimer'
      })
    }
  };
  Logger.log(doPost(fake).getContent());
}

// Appelé par le site à chaque inscription
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000); // évite que deux inscriptions simultanées s'écrasent

  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      clean_(data.branche),
      clean_(data.prenom),
      clean_(data.nom),
      clean_(data.email),
      clean_(data.numero_etudiant),
      clean_(data.messenger),
      clean_(data.profil)
    ]);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Ouvrir l'URL /exec dans un navigateur doit afficher "OK" : pratique pour tester
function doGet() {
  return ContentService.createTextOutput('OK');
}

// Crée l'onglet et les en-têtes s'ils n'existent pas encore
function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.getRange('A:A').setNumberFormat('dd/MM/yyyy HH:mm');
    sheet.getRange('F:F').setNumberFormat('@'); // numéro étudiant en texte (garde les 0 du début)
  }
  return sheet;
}

// Nettoie une valeur et empêche qu'un texte commençant par = + - @ soit lu comme une formule
function clean_(value) {
  const s = String(value == null ? '' : value).trim().slice(0, 2000);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
