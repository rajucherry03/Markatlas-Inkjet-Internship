import React from 'react';
import { Link } from 'react-router-dom';

const Emptab = () => {
  return (
    <div className="flex-1 p-8 bg-white md:ml-[16rem] overflow-auto h-screen">
      <div className="bg-amber-300 text-white p-4 rounded-md shadow-md mb-6">
        <h2 className="text-3xl font-bold mb-2">ABOUT MARKATLAS INKJET</h2>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Table Example</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 1</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 2</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 3</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 4</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 3</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 1, Col 4</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 3</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 2, Col 4</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Row 3, Col 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 3, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 3, Col 3</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 3, Col 4</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Row 4, Col 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 4, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 4, Col 3</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 4, Col 4</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Row 5, Col 1</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 5, Col 2</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 5, Col 3</td>
                <td className="px-6 py-4 whitespace-nowrap">Row 5, Col 4</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Emptab;
