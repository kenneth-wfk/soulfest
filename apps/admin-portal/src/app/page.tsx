export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col gap-8 max-w-6xl mx-auto">
      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-white/10 bg-[#0a0a0a] rounded-xl p-6">
          <h3 className="text-sm font-medium text-white/60 mb-1">Total Sales</h3>
          <p className="text-3xl font-bold text-white">$45,231.00</p>
          <p className="text-xs text-emerald-500 mt-2">+12% from last week</p>
        </div>
        <div className="border border-white/10 bg-[#0a0a0a] rounded-xl p-6">
          <h3 className="text-sm font-medium text-white/60 mb-1">Pending Bank Slips</h3>
          <p className="text-3xl font-bold text-white">24</p>
          <p className="text-xs text-amber-500 mt-2">Action required</p>
        </div>
        <div className="border border-white/10 bg-[#0a0a0a] rounded-xl p-6">
          <h3 className="text-sm font-medium text-white/60 mb-1">Tickets Sold</h3>
          <p className="text-3xl font-bold text-white">1,204</p>
          <p className="text-xs text-white/40 mt-2">Out of 5,000 capacity</p>
        </div>
      </div>

      {/* Bank Slip Verification Queue */}
      <div className="border border-white/10 bg-[#000000]/60 rounded-xl overflow-hidden shadow-2xl backdrop-blur-md">
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-[#0a0a0a]">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              Pending Bank Slip Verifications
            </h3>
            <p className="text-sm text-white/50 mt-1">Review user uploaded receipts to approve ticket issuance.</p>
          </div>
          <button className="text-sm font-medium text-black bg-[#FFD700] hover:bg-white px-4 py-2 rounded-md transition-colors">
            Process Next
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-white/80">
            <thead className="bg-white/5 text-xs uppercase text-white/50 font-semibold border-b border-white/10">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Bank Slip</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { id: "ORD-1045", name: "David Tan", amount: "RM 250.00", document: "maybank_receipt_092.pdf", time: "10 mins ago" },
                { id: "ORD-1044", name: "Sarah Lee", amount: "RM 500.00", document: "transfer_ss.jpg", time: "1 hour ago" },
                { id: "ORD-1043", name: "Ahmed bin Jamal", amount: "RM 80.00", document: "cimb_clicks.png", time: "3 hours ago" },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-white-[0.02] bg-[#050505] transition-colors group">
                  <td className="px-6 py-4 font-bold text-white">{order.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span>{order.name}</span>
                      <span className="text-xs text-white/40">{order.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-emerald-400 font-medium">{order.amount}</td>
                  <td className="px-6 py-4">
                    <button className="flex items-center gap-2 text-[#87CEEB] hover:text-white transition-colors">
                      📄 <span className="underline decoration-white/30 underline-offset-2">{order.document}</span>
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-amber-500/10 text-amber-500 text-xs px-3 py-1 rounded-full font-bold border border-amber-500/20">
                      Awaiting Verification
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white px-3 py-1.5 rounded text-xs font-bold transition-all border border-emerald-500/30">
                        Approve
                      </button>
                      <button className="bg-red-500/20 hover:bg-red-500 text-red-400 hover:text-white px-3 py-1.5 rounded text-xs font-bold transition-all border border-red-500/30">
                        Reject
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
