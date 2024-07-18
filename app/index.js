"use client"
import { useEffect } from "react";
import SideNavbar from "./components/SideNavbar";
import WebSocket from 'isomorphic-ws';

export default function Home() {
  useEffect(() => {
    const tableBody = document.getElementById('data-table-body');
    let existingRow = null;
    const socket = new WebSocket('ws://localhost:4000');
    
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
    
      if (!existingRow) {
        existingRow = document.createElement('tr');
        existingRow.innerHTML = `
          <td className="py-2 px-4 border-b border-gray-400"></td>
          <td className="py-2 px-4 border-b border-gray-400"></td>
          <td className="py-2 px-4 border-b border-gray-400"></td>
          <td className="py-2 px-4 border-b border-gray-400"></td>
          <td className="py-2 px-4 border-b border-gray-400"></td>
        `;
        tableBody.appendChild(existingRow);
      }

      existingRow.cells[0].innerText = data.latitude;
      existingRow.cells[1].innerText = data.longitude;
      existingRow.cells[2].innerText = data.altitude;
      existingRow.cells[3].innerText = data.startTime;
      existingRow.cells[4].innerText = data.endTime;
    };

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">

      <div className="flex flex-1">
        <SideNavbar />
        <main className="flex-grow p-6 ml-60 lg:ml-64">
          <h1 className="text-black text-3xl">Random Coordinates and Times</h1>
          <table className="min-w-full bg-gray-300 text-black border border-gray-300">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-400">Latitude</th>
                <th className="py-2 px-4 border-b border-gray-400">Longitude</th>
                <th className="py-2 px-4 border-b border-gray-400">Altitude (m)</th>
                <th className="py-2 px-4 border-b border-gray-400">Start Time</th>
                <th className="py-2 px-4 border-b border-gray-400">End Time</th>
              </tr>
            </thead>
            <tbody id="data-table-body"></tbody>
          </table>
        </main>
      </div>
    </div>
  );
}