const Feature = ({ feature }) => {
  const IconComponent = feature.icon;
  return (
    <div
      className={`group p-8 rounded-3xl bg-slate-900/80 border border-slate-800 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-2 hover:border-blue-500/60 hover:bg-linear-to-r ${feature.gradient}  hover:shadow-[0_20px_60px_rgba(59,130,246,0.35),0_0_25px_rgba(59,130,246,0.25)]  `}
    >
      <div
        className={`w-16 h-16 mb-6 rounded-2xl flex items-center justify-center bg-linear-to-br ${feature.iconGradient} shadow-2xl transition-transform duration-300 group-hover:scale-110`}
      >
        {<IconComponent height={36} width={36} />}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
      <p className="text-slate-300 leading-relaxed mb-6">
        {feature.description}
      </p>
      <span className="text-sm font-medium text-blue-400 tracking-wide">
        {feature.subtitle}
      </span>
    </div>
  );
};

export default Feature;
