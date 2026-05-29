interface TierMeta {
  label: string
  range: string
}

interface Props {
  tiers: {
    expert: TierMeta
    proficient: TierMeta
    working: TierMeta
    learning: TierMeta
  }
  label?: string
}

// Left → right = high → low proficiency (精通 on the left, 了解 on the right),
// shown as one continuous gradient axis.
const ORDER: Array<keyof Props["tiers"]> = ["expert", "proficient", "working", "learning"]

export function SkillsLegend({ tiers, label }: Props) {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      {label && (
        <span className="text-[11px] uppercase tracking-wider text-zinc-500">{label}</span>
      )}
      <div className="w-full max-w-md">
        {/* gradient axis: expert (purple-pink) → learning (grey) */}
        <div className="h-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-zinc-600"></div>
        {/* tick labels under the axis */}
        <div className="mt-1.5 flex justify-between">
          {ORDER.map((key) => (
            <div key={key} className="flex flex-col items-center leading-tight">
              <span className="text-xs font-medium text-zinc-200">{tiers[key].label}</span>
              <span className="text-[10px] text-zinc-500">{tiers[key].range}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
