export default function ComparePage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        Compare Colleges
      </h1>

      <table className="border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border p-3">College</th>
            <th className="border p-3">Fees</th>
            <th className="border p-3">Rating</th>
            <th className="border p-3">Location</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-3">GL Bajaj</td>
            <td className="border p-3">₹1.5 Lakh</td>
            <td className="border p-3">4.5</td>
            <td className="border p-3">Greater Noida</td>
          </tr>

          <tr>
            <td className="border p-3">United College</td>
            <td className="border p-3">₹1.2 Lakh</td>
            <td className="border p-3">4.1</td>
            <td className="border p-3">Prayagraj</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}