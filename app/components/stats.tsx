export default function Stats() {
  const statsList = [
    {
      value: "2 124 000",
      label: "kilometers",
      subtext: "passed by our travelers"
    },
    {
      value: "8 200",
      label: "travelers",
      subtext: "participated in our tours"
    },
    {
      value: "345",
      label: "positive feedback",
      subtext: "for all years of the company"
    },
    {
      value: "14",
      label: "years of work",
      subtext: "for your wonderful experiences"
    }
  ];

  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsList.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col bg-[#FFFFFF] p-6 rounded-[1.5rem] border border-wonderland-cream/40 shadow-sm"
        >
          <span className="font-heading text-[38px] font-extrabold text-wonderland-brown tracking-tight leading-none">
            {stat.value}
          </span>
          <span className="font-heading text-[12px] font-bold text-wonderland-brown uppercase mt-3 tracking-wider">
            {stat.label}
          </span>
          <span className="font-body text-[12px] text-wonderland-gray mt-1 leading-relaxed">
            {stat.subtext}
          </span>
        </div>
      ))}
    </div>
  );
}
