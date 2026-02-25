// utils/filename.js
export function generatePdfFilename(baseName = 'Magiwriterdocs', extension = 'pdf') {
  const now = new Date();
  
  const dateStr = now.toISOString().slice(0, 10); // 2025-12-19
  const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '-'); // 18-35-42
  
  return `${baseName}-${dateStr}-${timeStr}.${extension}`;
}
export function generateDocxFilename(baseName = 'Magiwriterdocs', extension = 'docx') {
  const now = new Date();
  
  const dateStr = now.toISOString().slice(0, 10); // 2025-12-19
  const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '-'); // 18-35-42
  
  return `${baseName}-${dateStr}-${timeStr}.${extension}`;
}
export function generateHtmlFilename(baseName = 'Magiwriterdocs', extension = 'txt') {
  const now = new Date();
  
  const dateStr = now.toISOString().slice(0, 10); // 2025-12-19
  const timeStr = now.toTimeString().slice(0, 8).replace(/:/g, '-'); // 18-35-42
  
  return `${baseName}-${dateStr}-${timeStr}.${extension}`;
}