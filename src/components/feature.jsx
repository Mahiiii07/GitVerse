const Feature = ({ feature }) => {
  const IconComponent = feature.icon;
  return (
    <div
      className={`group p-8 rounded-3xl bg-slate-900/80 border border-slate-800 feature-shadow hover:-translate-y-2 ${feature.borderGradient} hover:bg-linear-to-r ${feature.gradient} `}
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
      <span
        className={`text-sm font-medium text-blue-400 tracking-wide ${feature.subTitleGradient}`}
      >
        {feature.subtitle}
      </span>
    </div>
  );
};

export default Feature;
