import fs from 'fs';
import path from 'path';
import * as XLSX from 'xlsx';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Path to the Excel file
    const filePath = path.resolve('public', 'Matriz.xlsx');
    console.log('File path:', filePath); // Log the file path

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.error('File not found');
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }

    // Read and parse the Excel file
    const fileBuffer = fs.readFileSync(filePath);
    const workbook = XLSX.read(fileBuffer, { type: 'buffer' });
    
    // Get the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    
    // Extract rows starting from line 2 and column B (index 1) up to column F (index 5)
    const range = XLSX.utils.decode_range(sheet['!ref']); // Get the range of the sheet
    const rows = [];
    
    // Loop through each row starting from row 2 (index 1) and extract Column B and beyond (up to column F)
    for (let rowNum = range.s.r + 1; rowNum <= range.e.r && rows.length < 100; rowNum++) {
      const cellAddressB = { c: 1, r: rowNum }; // Column B (index 1)
      const cellRefB = XLSX.utils.encode_cell(cellAddressB);
      const cellValueB = sheet[cellRefB] ? sheet[cellRefB].v : null; // Get the value in Column B or null

      // If the value in column B is not "docente", store the row from column B to F
      if (cellValueB !== 'docente') {
        const rowData = [];
        // Loop from column B (index 1) to F (index 5) and store each value (including nulls)
        for (let colNum = 1; colNum <= 5; colNum++) {
          const cellAddress = { c: colNum, r: rowNum };
          const cellRef = XLSX.utils.encode_cell(cellAddress);
          const cellValue = sheet[cellRef] ? sheet[cellRef].v : null; // Get the value or null
          rowData.push(cellValue); // Add to rowData (including nulls)
        }
        rows.push(rowData); // Store the row data in the rows array
      }
    }

    console.log('Rows starting from line 2, columns B to F:', rows); // Log the extracted rows

    // Return the JSON response with the rows
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Error reading Excel file:', error); // Log error details
    return NextResponse.error();
  }
}
