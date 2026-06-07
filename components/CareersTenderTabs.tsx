interface TabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export default function CareersTenderTabs({
  activeTab,
  setActiveTab,
}: TabsProps) {
  return (
    <div className="flex justify-center mb-10">
      <div className="bg-white/10 backdrop-blur-lg p-2 rounded-full flex gap-2 shadow-xl border border-white/10">
        <button
          onClick={() => setActiveTab("career")}
          className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
            activeTab === "career"
              ? "bg-[#98027F] text-white shadow-lg"
              : "text-white hover:bg-white/10"
          }`}
        >
          Careers
        </button>

        <button
          onClick={() => setActiveTab("tender")}
          className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${
            activeTab === "tender"
              ? "bg-[#98027F] text-white shadow-lg"
              : "text-white hover:bg-white/10"
          }`}
        >
          Tenders
        </button>
      </div>
    </div>
  )
}