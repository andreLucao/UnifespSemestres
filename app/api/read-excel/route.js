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
    
    // Get the first sheet and convert it to JSON
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = XLSX.utils.sheet_to_json(sheet);

    console.log('Parsed data:', data); // Log parsed data

    // Return the JSON response
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error reading Excel file:', error); // Log error details
    return NextResponse.error();
  }
}
