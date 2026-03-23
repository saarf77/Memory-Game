// Hand-illustrated animal SVG cards — each animal has strong, recognizable features

export function Lion({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Big bushy mane — spiky outer ring */}
      <circle cx="50" cy="54" r="38" fill="#92400E" />
      <circle cx="50" cy="54" r="33" fill="#D97706" />
      <circle cx="50" cy="54" r="28" fill="#F59E0B" />
      {/* Mane texture blobs */}
      {[0,25,50,75,100,125,150,175,200,225,250,275,300,325].map((deg, i) => {
        const rad = (deg * Math.PI) / 180
        const x = 50 + Math.cos(rad) * 31
        const y = 54 + Math.sin(rad) * 31
        return <ellipse key={i} cx={x} cy={y} rx="5" ry="6" fill="#B45309" opacity="0.7" transform={`rotate(${deg} ${x} ${y})`} />
      })}
      {/* Face */}
      <circle cx="50" cy="52" r="23" fill="#FDE68A" />
      {/* Round ears above mane */}
      <circle cx="30" cy="32" r="9" fill="#F59E0B" />
      <circle cx="70" cy="32" r="9" fill="#F59E0B" />
      <circle cx="30" cy="32" r="5" fill="#FCA5A5" />
      <circle cx="70" cy="32" r="5" fill="#FCA5A5" />
      {/* Eyes — big amber */}
      <circle cx="41" cy="47" r="7" fill="white" />
      <circle cx="59" cy="47" r="7" fill="white" />
      <circle cx="42" cy="48" r="4.5" fill="#92400E" />
      <circle cx="60" cy="48" r="4.5" fill="#92400E" />
      <circle cx="42" cy="48" r="2.5" fill="#1C1917" />
      <circle cx="60" cy="48" r="2.5" fill="#1C1917" />
      <circle cx="43" cy="46.5" r="1.2" fill="white" />
      <circle cx="61" cy="46.5" r="1.2" fill="white" />
      {/* Wide flat snout */}
      <ellipse cx="50" cy="60" rx="10" ry="7" fill="#FCA5A5" />
      <ellipse cx="50" cy="58" rx="5" ry="3.5" fill="#F87171" />
      {/* Nose */}
      <ellipse cx="50" cy="56" rx="3.5" ry="2.5" fill="#9F1239" />
      {/* Mouth */}
      <line x1="50" y1="58" x2="50" y2="61" stroke="#9F1239" strokeWidth="1.5" />
      <path d="M44 63 Q50 67 56 63" stroke="#9F1239" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="16" y1="57" x2="39" y2="59" stroke="#92400E" strokeWidth="1.2" opacity="0.5" />
      <line x1="16" y1="62" x2="39" y2="62" stroke="#92400E" strokeWidth="1.2" opacity="0.5" />
      <line x1="61" y1="59" x2="84" y2="57" stroke="#92400E" strokeWidth="1.2" opacity="0.5" />
      <line x1="61" y1="62" x2="84" y2="62" stroke="#92400E" strokeWidth="1.2" opacity="0.5" />
    </svg>
  )
}

export function Wolf({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neck / lower body mass */}
      <ellipse cx="50" cy="88" rx="28" ry="16" fill="#4B5563" />
      {/* Main head — wide and slightly angular, NOT round */}
      <path d="M12 60 Q14 28 50 24 Q86 28 88 60 Q80 82 50 84 Q20 82 12 60Z" fill="#4B5563" />
      {/* Lighter grey face mask covering cheeks + forehead */}
      <ellipse cx="50" cy="58" rx="26" ry="26" fill="#6B7280" />
      {/* Darker fur on top of skull */}
      <ellipse cx="50" cy="36" rx="22" ry="14" fill="#374151" />
      {/* Wide-set triangular ears — flatter angle than cat */}
      <polygon points="16,50 20,14 44,38" fill="#4B5563" />
      <polygon points="84,50 80,14 56,38" fill="#4B5563" />
      <polygon points="19,48 23,20 42,38" fill="#9CA3AF" />
      <polygon points="81,48 77,20 58,38" fill="#9CA3AF" />
      {/* LONG protruding rectangular muzzle — the wolf's defining shape */}
      {/* Muzzle base */}
      <rect x="34" y="58" width="32" height="24" rx="10" fill="#9CA3AF" />
      {/* Muzzle sides darker to give depth */}
      <ellipse cx="36" cy="70" rx="6" ry="10" fill="#6B7280" opacity="0.5" />
      <ellipse cx="64" cy="70" rx="6" ry="10" fill="#6B7280" opacity="0.5" />
      {/* Big broad wolf nose on TOP of muzzle */}
      <ellipse cx="50" cy="62" rx="8" ry="5.5" fill="#1C1917" />
      <ellipse cx="47.5" cy="60.5" rx="2.5" ry="1.5" fill="#374151" />
      {/* Nostril lines */}
      <path d="M44 63 Q50 66 56 63" stroke="#374151" strokeWidth="1" fill="none" />
      {/* Mouth — straight line then slight curl, not a cute smile */}
      <line x1="50" y1="67" x2="50" y2="71" stroke="#4B5563" strokeWidth="2" />
      <path d="M42 73 Q50 76 58 73" stroke="#4B5563" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Eyes set HIGH and wide — amber/yellow, wolf stare */}
      <ellipse cx="35" cy="50" rx="9" ry="8" fill="#1C1917" />
      <ellipse cx="65" cy="50" rx="9" ry="8" fill="#1C1917" />
      <ellipse cx="35" cy="50" rx="7" ry="6.5" fill="#FEF3C7" />
      <ellipse cx="65" cy="50" rx="7" ry="6.5" fill="#FEF3C7" />
      <ellipse cx="35" cy="50" rx="5" ry="5" fill="#B45309" />
      <ellipse cx="65" cy="50" rx="5" ry="5" fill="#B45309" />
      <ellipse cx="35" cy="50" rx="3" ry="4" fill="#1C1917" />
      <ellipse cx="65" cy="50" rx="3" ry="4" fill="#1C1917" />
      <circle cx="34" cy="48.5" r="1.5" fill="white" />
      <circle cx="64" cy="48.5" r="1.5" fill="white" />
      {/* Fur detail lines on cheeks */}
      <path d="M16 55 Q24 52 28 58" stroke="#374151" strokeWidth="1.5" fill="none" opacity="0.6" />
      <path d="M84 55 Q76 52 72 58" stroke="#374151" strokeWidth="1.5" fill="none" opacity="0.6" />
    </svg>
  )
}

export function Giraffe({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Long neck — the defining feature */}
      <rect x="36" y="42" width="28" height="50" rx="14" fill="#FCD34D" />
      {/* Neck spots */}
      <ellipse cx="44" cy="52" rx="5" ry="4" fill="#D97706" opacity="0.8" />
      <ellipse cx="57" cy="62" rx="4" ry="5" fill="#B45309" opacity="0.7" />
      <ellipse cx="43" cy="73" rx="5" ry="4" fill="#D97706" opacity="0.8" />
      <ellipse cx="56" cy="82" rx="4" ry="3" fill="#B45309" opacity="0.7" />
      {/* Head — small atop long neck */}
      <ellipse cx="50" cy="32" rx="18" ry="14" fill="#FCD34D" />
      {/* Ossicones (horns) — very distinctive */}
      <rect x="38" y="12" width="6" height="14" rx="3" fill="#B45309" />
      <rect x="56" y="12" width="6" height="14" rx="3" fill="#B45309" />
      <circle cx="41" cy="12" r="4" fill="#92400E" />
      <circle cx="59" cy="12" r="4" fill="#92400E" />
      {/* Ears */}
      <ellipse cx="30" cy="28" rx="6" ry="9" fill="#FCD34D" transform="rotate(-25 30 28)" />
      <ellipse cx="70" cy="28" rx="6" ry="9" fill="#FCD34D" transform="rotate(25 70 28)" />
      <ellipse cx="30" cy="28" rx="3.5" ry="5.5" fill="#FCA5A5" transform="rotate(-25 30 28)" />
      <ellipse cx="70" cy="28" rx="3.5" ry="5.5" fill="#FCA5A5" transform="rotate(25 70 28)" />
      {/* Head spots */}
      <ellipse cx="40" cy="28" rx="4" ry="3" fill="#D97706" opacity="0.6" />
      <ellipse cx="60" cy="26" rx="3" ry="3.5" fill="#B45309" opacity="0.6" />
      {/* Eyes — big with long lashes */}
      <circle cx="40" cy="28" r="6" fill="white" />
      <circle cx="60" cy="28" r="6" fill="white" />
      <circle cx="41" cy="29" r="4" fill="#78350F" />
      <circle cx="61" cy="29" r="4" fill="#78350F" />
      <circle cx="41" cy="29" r="2" fill="#1C1917" />
      <circle cx="61" cy="29" r="2" fill="#1C1917" />
      <circle cx="41.5" cy="28" r="1" fill="white" />
      <circle cx="61.5" cy="28" r="1" fill="white" />
      {/* Eyelashes */}
      <line x1="36" y1="22" x2="34" y2="19" stroke="#78350F" strokeWidth="1.5" />
      <line x1="39" y1="21" x2="38" y2="18" stroke="#78350F" strokeWidth="1.5" />
      <line x1="56" y1="21" x2="55" y2="18" stroke="#78350F" strokeWidth="1.5" />
      <line x1="59" y1="22" x2="61" y2="19" stroke="#78350F" strokeWidth="1.5" />
      {/* Nostrils */}
      <ellipse cx="46" cy="36" rx="2" ry="1.5" fill="#D97706" />
      <ellipse cx="54" cy="36" rx="2" ry="1.5" fill="#D97706" />
      {/* Mouth */}
      <path d="M44 39 Q50 42 56 39" stroke="#D97706" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Bear({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head — wide round */}
      <circle cx="50" cy="55" r="34" fill="#78350F" />
      {/* Big round ears */}
      <circle cx="22" cy="27" r="14" fill="#78350F" />
      <circle cx="78" cy="27" r="14" fill="#78350F" />
      <circle cx="22" cy="27" r="8" fill="#92400E" />
      <circle cx="78" cy="27" r="8" fill="#92400E" />
      {/* Face */}
      <circle cx="50" cy="56" r="27" fill="#92400E" />
      {/* Wide pale muzzle */}
      <ellipse cx="50" cy="66" rx="16" ry="12" fill="#D97706" />
      {/* Eyes — small round bear eyes */}
      <circle cx="37" cy="50" r="7" fill="#1C1917" />
      <circle cx="63" cy="50" r="7" fill="#1C1917" />
      <circle cx="38.5" cy="48.5" r="2.5" fill="white" />
      <circle cx="64.5" cy="48.5" r="2.5" fill="white" />
      {/* Big round black nose */}
      <ellipse cx="50" cy="62" rx="7" ry="5.5" fill="#1C1917" />
      <ellipse cx="48" cy="61" rx="2" ry="1.5" fill="#374151" />
      {/* Mouth */}
      <line x1="50" y1="67" x2="50" y2="70" stroke="#78350F" strokeWidth="2" />
      <path d="M43 72 Q50 77 57 72" stroke="#78350F" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Chicken({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="50" cy="70" rx="26" ry="22" fill="#FEF9C3" />
      {/* Wings */}
      <ellipse cx="28" cy="70" rx="12" ry="18" fill="#FEF08A" transform="rotate(-15 28 70)" />
      <ellipse cx="72" cy="70" rx="12" ry="18" fill="#FEF08A" transform="rotate(15 72 70)" />
      {/* Head */}
      <circle cx="50" cy="38" r="20" fill="#FEF9C3" />
      {/* BIG red comb — very distinctive */}
      <ellipse cx="40" cy="20" rx="7" ry="10" fill="#DC2626" />
      <ellipse cx="50" cy="17" rx="7" ry="11" fill="#EF4444" />
      <ellipse cx="60" cy="20" rx="7" ry="10" fill="#DC2626" />
      {/* Red wattle under beak */}
      <ellipse cx="50" cy="50" rx="6" ry="9" fill="#EF4444" />
      {/* Eyes — round bright */}
      <circle cx="38" cy="35" r="8" fill="#1C1917" />
      <circle cx="62" cy="35" r="8" fill="#1C1917" />
      <circle cx="36" cy="33" r="3" fill="white" />
      <circle cx="60" cy="33" r="3" fill="white" />
      <circle cx="36" cy="33" r="1.5" fill="#1C1917" />
      <circle cx="60" cy="33" r="1.5" fill="#1C1917" />
      {/* Yellow beak — big triangle */}
      <polygon points="42,43 58,43 50,55" fill="#F59E0B" />
      <polygon points="42,43 58,43 50,49" fill="#FDE68A" />
      <line x1="42" y1="43" x2="58" y2="43" stroke="#D97706" strokeWidth="1.5" />
      {/* Feet */}
      <line x1="42" y1="90" x2="36" y2="100" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="58" y1="90" x2="64" y2="100" stroke="#F59E0B" strokeWidth="3.5" strokeLinecap="round" />
      <line x1="33" y1="100" x2="42" y2="100" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="61" y1="100" x2="70" y2="100" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

export function Cat({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="50" cy="56" r="30" fill="#F97316" />
      {/* TALL pointed ears — key cat feature */}
      <polygon points="20,44 12,10 38,36" fill="#F97316" />
      <polygon points="80,44 88,10 62,36" fill="#F97316" />
      <polygon points="22,42 16,16 36,36" fill="#FCA5A5" />
      <polygon points="78,42 84,16 64,36" fill="#FCA5A5" />
      {/* Face stripes on forehead */}
      <path d="M38 36 Q42 30 46 36" stroke="#EA580C" strokeWidth="2" fill="none" />
      <path d="M54 36 Q58 30 62 36" stroke="#EA580C" strokeWidth="2" fill="none" />
      <line x1="50" y1="30" x2="50" y2="38" stroke="#EA580C" strokeWidth="2" opacity="0.5" />
      {/* Eyes — big with vertical slit pupils */}
      <circle cx="38" cy="52" r="9" fill="#FEF3C7" />
      <circle cx="62" cy="52" r="9" fill="#FEF3C7" />
      {/* Green iris */}
      <circle cx="38" cy="52" r="7" fill="#16A34A" />
      <circle cx="62" cy="52" r="7" fill="#16A34A" />
      {/* Slit pupils */}
      <ellipse cx="38" cy="52" rx="2.5" ry="6.5" fill="#1C1917" />
      <ellipse cx="62" cy="52" rx="2.5" ry="6.5" fill="#1C1917" />
      <circle cx="37" cy="49" r="1.5" fill="white" />
      <circle cx="61" cy="49" r="1.5" fill="white" />
      {/* Pink nose — triangle */}
      <polygon points="50,63 46,60 54,60" fill="#EC4899" />
      {/* Mouth */}
      <line x1="50" y1="63" x2="50" y2="66" stroke="#C2410C" strokeWidth="1.5" />
      <path d="M44 68 Q50 73 56 68" stroke="#C2410C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Long whiskers */}
      <line x1="10" y1="60" x2="38" y2="63" stroke="#fff" strokeWidth="1.2" opacity="0.7" />
      <line x1="10" y1="65" x2="38" y2="65" stroke="#fff" strokeWidth="1.2" opacity="0.7" />
      <line x1="10" y1="70" x2="38" y2="67" stroke="#fff" strokeWidth="1.2" opacity="0.7" />
      <line x1="62" y1="63" x2="90" y2="60" stroke="#fff" strokeWidth="1.2" opacity="0.7" />
      <line x1="62" y1="65" x2="90" y2="65" stroke="#fff" strokeWidth="1.2" opacity="0.7" />
      <line x1="62" y1="67" x2="90" y2="70" stroke="#fff" strokeWidth="1.2" opacity="0.7" />
    </svg>
  )
}

export function Tiger({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head — big and wide */}
      <circle cx="50" cy="55" r="34" fill="#F97316" />
      {/* Round ears with black tips */}
      <circle cx="24" cy="28" r="12" fill="#F97316" />
      <circle cx="76" cy="28" r="12" fill="#F97316" />
      <circle cx="24" cy="26" r="6" fill="#FCA5A5" />
      <circle cx="76" cy="26" r="6" fill="#FCA5A5" />
      <circle cx="24" cy="23" r="4" fill="#1C1917" />
      <circle cx="76" cy="23" r="4" fill="#1C1917" />
      {/* Bold black stripes — the tiger's identity */}
      <path d="M26 42 Q32 36 34 46" stroke="#1C1917" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M74 42 Q68 36 66 46" stroke="#1C1917" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M36 32 Q40 24 46 32" stroke="#1C1917" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M54 32 Q60 24 64 32" stroke="#1C1917" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M44 26 Q50 20 56 26" stroke="#1C1917" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* White chin/cheek area */}
      <ellipse cx="50" cy="67" rx="20" ry="15" fill="#FEF3C7" />
      {/* Cheek stripes */}
      <path d="M28 58 Q36 55 34 65" stroke="#1C1917" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M72 58 Q64 55 66 65" stroke="#1C1917" strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* Eyes — bright amber */}
      <circle cx="38" cy="50" r="8" fill="#FEF3C7" />
      <circle cx="62" cy="50" r="8" fill="#FEF3C7" />
      <circle cx="38" cy="50" r="6" fill="#D97706" />
      <circle cx="62" cy="50" r="6" fill="#D97706" />
      {/* Slit pupils */}
      <ellipse cx="38" cy="50" rx="2.5" ry="5.5" fill="#1C1917" />
      <ellipse cx="62" cy="50" rx="2.5" ry="5.5" fill="#1C1917" />
      <circle cx="37" cy="48" r="1.5" fill="white" />
      <circle cx="61" cy="48" r="1.5" fill="white" />
      {/* Pink nose */}
      <ellipse cx="50" cy="62" rx="5" ry="3.5" fill="#EC4899" />
      <ellipse cx="50" cy="61" rx="3" ry="2" fill="#F9A8D4" />
      {/* Mouth */}
      <line x1="50" y1="65" x2="50" y2="68" stroke="#C2410C" strokeWidth="1.5" />
      <path d="M44 70 Q50 75 56 70" stroke="#C2410C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="12" y1="62" x2="38" y2="64" stroke="white" strokeWidth="1.2" opacity="0.8" />
      <line x1="12" y1="67" x2="38" y2="67" stroke="white" strokeWidth="1.2" opacity="0.8" />
      <line x1="62" y1="64" x2="88" y2="62" stroke="white" strokeWidth="1.2" opacity="0.8" />
      <line x1="62" y1="67" x2="88" y2="67" stroke="white" strokeWidth="1.2" opacity="0.8" />
    </svg>
  )
}

export function Elephant({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Big floppy ears — the elephant's key feature */}
      <ellipse cx="14" cy="52" rx="18" ry="26" fill="#6B7280" />
      <ellipse cx="86" cy="52" rx="18" ry="26" fill="#6B7280" />
      <ellipse cx="14" cy="52" rx="12" ry="19" fill="#9CA3AF" opacity="0.6" />
      <ellipse cx="86" cy="52" rx="12" ry="19" fill="#9CA3AF" opacity="0.6" />
      {/* Head */}
      <circle cx="50" cy="48" r="32" fill="#9CA3AF" />
      <circle cx="50" cy="50" r="27" fill="#D1D5DB" />
      {/* Long trunk curving down */}
      <path d="M38 68 Q28 80 32 92 Q36 100 44 96 Q40 88 42 80 Q44 72 50 68" stroke="#9CA3AF" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d="M38 68 Q28 80 32 92 Q36 100 44 96 Q40 88 42 80 Q44 72 50 68" stroke="#D1D5DB" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Trunk ridges */}
      <path d="M32 76 Q36 74 38 78" stroke="#9CA3AF" strokeWidth="1.5" fill="none" />
      <path d="M32 82 Q36 80 39 84" stroke="#9CA3AF" strokeWidth="1.5" fill="none" />
      {/* White tusks */}
      <path d="M40 70 Q28 82 30 90" stroke="#FEF3C7" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* Eyes — small kind eyes */}
      <circle cx="37" cy="42" r="8" fill="white" />
      <circle cx="63" cy="42" r="8" fill="white" />
      <circle cx="38" cy="43" r="5" fill="#1C1917" />
      <circle cx="64" cy="43" r="5" fill="#1C1917" />
      <circle cx="38.5" cy="41.5" r="2" fill="white" />
      <circle cx="64.5" cy="41.5" r="2" fill="white" />
      {/* Eyelashes */}
      <line x1="33" y1="35" x2="31" y2="32" stroke="#6B7280" strokeWidth="1.5" />
      <line x1="37" y1="34" x2="36" y2="31" stroke="#6B7280" strokeWidth="1.5" />
      <line x1="41" y1="35" x2="41" y2="32" stroke="#6B7280" strokeWidth="1.5" />
    </svg>
  )
}

export function Frog({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="50" cy="70" rx="30" ry="22" fill="#16A34A" />
      {/* Head */}
      <ellipse cx="50" cy="52" rx="32" ry="26" fill="#22C55E" />
      {/* Bulging eyes on TOP of head — key frog feature */}
      <circle cx="28" cy="34" r="15" fill="#22C55E" />
      <circle cx="72" cy="34" r="15" fill="#22C55E" />
      <circle cx="28" cy="34" r="12" fill="#FEF9C3" />
      <circle cx="72" cy="34" r="12" fill="#FEF9C3" />
      {/* Gold iris */}
      <circle cx="28" cy="35" r="9" fill="#D97706" />
      <circle cx="72" cy="35" r="9" fill="#D97706" />
      <circle cx="28" cy="35" r="6" fill="#1C1917" />
      <circle cx="72" cy="35" r="6" fill="#1C1917" />
      <circle cx="26.5" cy="33" r="2.5" fill="white" />
      <circle cx="70.5" cy="33" r="2.5" fill="white" />
      {/* Wide smile — frogs always smile */}
      <path d="M24 62 Q50 80 76 62" stroke="#15803D" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      {/* Pale belly */}
      <ellipse cx="50" cy="72" rx="20" ry="14" fill="#86EFAC" opacity="0.7" />
      {/* Nostril dots */}
      <circle cx="44" cy="54" r="2.5" fill="#15803D" />
      <circle cx="56" cy="54" r="2.5" fill="#15803D" />
      {/* Toe bumps */}
      <circle cx="22" cy="88" r="5" fill="#16A34A" />
      <circle cx="34" cy="92" r="5" fill="#16A34A" />
      <circle cx="66" cy="92" r="5" fill="#16A34A" />
      <circle cx="78" cy="88" r="5" fill="#16A34A" />
    </svg>
  )
}

export function Fox({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <ellipse cx="50" cy="54" rx="32" ry="28" fill="#EA580C" />
      {/* VERY TALL pointed ears with white inside — key fox look */}
      <polygon points="20,44 8,4 40,34" fill="#EA580C" />
      <polygon points="80,44 92,4 60,34" fill="#EA580C" />
      {/* White ear insides */}
      <polygon points="22,42 12,12 38,34" fill="white" />
      <polygon points="78,42 88,12 62,34" fill="white" />
      {/* Black ear tips */}
      <polygon points="12,4 8,4 14,16 18,14" fill="#1C1917" />
      <polygon points="88,4 92,4 86,16 82,14" fill="#1C1917" />
      {/* White face/cheek blaze — key fox feature */}
      <ellipse cx="50" cy="62" rx="22" ry="17" fill="white" />
      {/* Dark saddle on top of face */}
      <ellipse cx="50" cy="46" rx="18" ry="10" fill="#C2410C" />
      {/* Eyes — dark with white sclera */}
      <circle cx="37" cy="48" r="8" fill="white" />
      <circle cx="63" cy="48" r="8" fill="white" />
      <circle cx="37" cy="48" r="6" fill="#1C1917" />
      <circle cx="63" cy="48" r="6" fill="#1C1917" />
      <circle cx="38" cy="46.5" r="2.5" fill="white" />
      <circle cx="64" cy="46.5" r="2.5" fill="white" />
      {/* Black nose — pointed fox muzzle */}
      <ellipse cx="50" cy="60" rx="5" ry="3.5" fill="#1C1917" />
      <circle cx="48.5" cy="59" r="1" fill="#374151" />
      {/* Mouth */}
      <line x1="50" y1="63" x2="50" y2="66" stroke="#7C2D12" strokeWidth="1.5" />
      <path d="M44 68 Q50 72 56 68" stroke="#7C2D12" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Whiskers */}
      <line x1="12" y1="60" x2="38" y2="62" stroke="#7C2D12" strokeWidth="1.2" opacity="0.6" />
      <line x1="12" y1="65" x2="38" y2="65" stroke="#7C2D12" strokeWidth="1.2" opacity="0.6" />
      <line x1="62" y1="62" x2="88" y2="60" stroke="#7C2D12" strokeWidth="1.2" opacity="0.6" />
      <line x1="62" y1="65" x2="88" y2="65" stroke="#7C2D12" strokeWidth="1.2" opacity="0.6" />
    </svg>
  )
}

export function Penguin({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body — black tuxedo */}
      <ellipse cx="50" cy="68" rx="26" ry="28" fill="#1C1917" />
      {/* White belly */}
      <ellipse cx="50" cy="70" rx="17" ry="22" fill="white" />
      {/* Head */}
      <circle cx="50" cy="36" r="24" fill="#1C1917" />
      {/* White face patch */}
      <ellipse cx="50" cy="40" rx="16" ry="18" fill="white" />
      {/* Eyes — bright on white face */}
      <circle cx="41" cy="34" r="7" fill="white" />
      <circle cx="59" cy="34" r="7" fill="white" />
      <circle cx="42" cy="35" r="5" fill="#1C1917" />
      <circle cx="60" cy="35" r="5" fill="#1C1917" />
      <circle cx="43" cy="34" r="2" fill="white" />
      <circle cx="61" cy="34" r="2" fill="white" />
      {/* Orange beak — triangle */}
      <polygon points="43,46 57,46 50,56" fill="#F59E0B" />
      <polygon points="43,46 57,46 50,51" fill="#FDE68A" />
      <line x1="43" y1="46" x2="57" y2="46" stroke="#D97706" strokeWidth="1.5" />
      {/* Black flippers */}
      <ellipse cx="22" cy="66" rx="10" ry="20" fill="#1C1917" transform="rotate(-12 22 66)" />
      <ellipse cx="78" cy="66" rx="10" ry="20" fill="#1C1917" transform="rotate(12 78 66)" />
      {/* Orange feet */}
      <ellipse cx="40" cy="94" rx="12" ry="6" fill="#F59E0B" />
      <ellipse cx="60" cy="94" rx="12" ry="6" fill="#F59E0B" />
    </svg>
  )
}

export function Butterfly({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Upper wings — large, colorful */}
      <path d="M50 50 Q20 10 4 26 Q-4 50 20 58 Q38 62 50 50Z" fill="#7C3AED" />
      <path d="M50 50 Q80 10 96 26 Q104 50 80 58 Q62 62 50 50Z" fill="#7C3AED" />
      {/* Lower wings */}
      <path d="M50 54 Q18 58 16 76 Q18 92 36 86 Q50 78 50 54Z" fill="#A855F7" />
      <path d="M50 54 Q82 58 84 76 Q82 92 64 86 Q50 78 50 54Z" fill="#A855F7" />
      {/* Wing patterns — circles */}
      <circle cx="24" cy="36" r="10" fill="#DDD6FE" opacity="0.8" />
      <circle cx="76" cy="36" r="10" fill="#DDD6FE" opacity="0.8" />
      <circle cx="18" cy="36" r="5" fill="#F0ABFC" opacity="0.9" />
      <circle cx="82" cy="36" r="5" fill="#F0ABFC" opacity="0.9" />
      <circle cx="30" cy="72" r="8" fill="#E879F9" opacity="0.7" />
      <circle cx="70" cy="72" r="8" fill="#E879F9" opacity="0.7" />
      {/* Wing edge dots */}
      <circle cx="8" cy="44" r="3" fill="#FDE68A" />
      <circle cx="92" cy="44" r="3" fill="#FDE68A" />
      {/* Body */}
      <ellipse cx="50" cy="52" rx="5" ry="26" fill="#1C1917" />
      {/* Head */}
      <circle cx="50" cy="24" r="8" fill="#1C1917" />
      {/* Antennae with balls */}
      <path d="M46 18 Q34 6 28 4" stroke="#1C1917" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M54 18 Q66 6 72 4" stroke="#1C1917" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="4" r="4" fill="#A855F7" />
      <circle cx="72" cy="4" r="4" fill="#A855F7" />
      {/* Eyes */}
      <circle cx="47" cy="23" r="2.5" fill="#A855F7" />
      <circle cx="53" cy="23" r="2.5" fill="#A855F7" />
    </svg>
  )
}

export function Dolphin({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* TAIL — forked, at the right */}
      <path d="M80 42 Q96 30 98 18 Q90 34 98 42 Q90 46 80 46Z" fill="#0369A1" />

      {/* BODY — smooth horizontal torpedo */}
      <ellipse cx="48" cy="52" rx="38" ry="16" fill="#38BDF8" />

      {/* WHITE BELLY — flat along the bottom of the body */}
      <ellipse cx="44" cy="57" rx="26" ry="9" fill="#BAE6FD" />

      {/* DORSAL FIN — tall triangle on top center */}
      <path d="M50 36 Q56 16 64 34" stroke="#0369A1" strokeWidth="2" fill="#0EA5E9" />

      {/* PECTORAL FIN — under body */}
      <path d="M40 60 Q28 72 34 80 Q42 72 44 62Z" fill="#0EA5E9" />

      {/* HEAD — large smooth circle, left side */}
      <circle cx="20" cy="50" r="20" fill="#38BDF8" />

      {/* BEAK — long flat snout, the #1 dolphin identifier */}
      <path d="M2 46 L22 48 L22 54 L2 54 Q0 50 2 46Z" fill="#38BDF8" />
      {/* White underside of beak */}
      <path d="M2 51 L22 51 L22 54 L2 54 Q0 52 2 51Z" fill="#BAE6FD" />
      {/* Smile — curves up from beak */}
      <path d="M2 54 Q12 62 22 57" stroke="#0369A1" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* EYE — big and friendly */}
      <circle cx="17" cy="44" r="6" fill="white" />
      <circle cx="18" cy="45" r="4" fill="#1C1917" />
      <circle cx="18.5" cy="43.5" r="1.8" fill="white" />

      {/* BLOWHOLE */}
      <ellipse cx="30" cy="32" rx="3.5" ry="2" fill="#0369A1" />

    </svg>
  )
}

export function Unicorn({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">

      {/* Rainbow mane flowing to the RIGHT side — not on top, away from horn */}
      <path d="M68 36 Q90 28 96 14 Q86 22 92 10 Q80 20 88 8 Q74 20 82 6 Q70 18 78 4 Q64 18 72 6 Q60 22 68 36" fill="#F87171" />
      <path d="M68 40 Q92 34 96 20 Q84 28 90 16 Q78 26 86 14 Q72 26 80 14 Q66 28 74 18 Q62 32 70 22 Q58 36 68 40" fill="#FB923C" />
      <path d="M68 44 Q90 40 94 28 Q82 36 88 24 Q76 34 84 22 Q70 34 78 22 Q64 36 72 26 Q60 40 68 44" fill="#FBBF24" />
      <path d="M66 48 Q88 46 92 34 Q80 42 86 30 Q74 40 82 28 Q68 40 76 28 Q62 42 70 32 Q58 44 66 48" fill="#34D399" />
      <path d="M64 52 Q86 52 90 40 Q78 48 84 36 Q72 46 80 34 Q66 46 74 34 Q60 46 68 36 Q56 48 64 52" fill="#60A5FA" />
      <path d="M62 56 Q84 58 88 46 Q76 54 82 42 Q70 52 78 40 Q64 52 72 40 Q58 50 66 40 Q54 52 62 56" fill="#C084FC" />

      {/* Big round head filling the card */}
      <circle cx="46" cy="58" r="34" fill="#FDF4FF" />

      {/* BIG CENTERED HORN — tall, prominent, can't miss it */}
      {/* Horn shadow/base */}
      <polygon points="46,6 36,44 56,44" fill="#D97706" />
      {/* Horn main body */}
      <polygon points="46,6 38,44 54,44" fill="#F59E0B" />
      {/* Horn highlight */}
      <polygon points="46,6 46,42 50,42" fill="#FDE68A" />
      {/* Spiral stripes on horn */}
      <path d="M40 38 Q44 28 42 18" stroke="#D97706" strokeWidth="1.5" fill="none" opacity="0.7" strokeLinecap="round" />
      <path d="M44 40 Q48 30 46 18" stroke="#D97706" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M48 40 Q52 30 50 18" stroke="#D97706" strokeWidth="1" fill="none" opacity="0.4" strokeLinecap="round" />

      {/* Ears — small pointy on each side of horn */}
      <polygon points="24,48 18,26 36,40" fill="#FDF4FF" />
      <polygon points="26,46 22,30 34,40" fill="#FBCFE8" />
      <polygon points="68,48 74,26 56,40" fill="#FDF4FF" />
      <polygon points="66,46 70,30 58,40" fill="#FBCFE8" />

      {/* Eyes — very big, sparkly, expressive */}
      <circle cx="34" cy="56" r="11" fill="#EDE9FE" />
      <circle cx="58" cy="56" r="11" fill="#EDE9FE" />
      <circle cx="34" cy="57" r="8.5" fill="#7C3AED" />
      <circle cx="58" cy="57" r="8.5" fill="#7C3AED" />
      <circle cx="34" cy="57" r="5" fill="#1C1917" />
      <circle cx="58" cy="57" r="5" fill="#1C1917" />
      <circle cx="33" cy="55" r="2.5" fill="white" />
      <circle cx="57" cy="55" r="2.5" fill="white" />
      <circle cx="36" cy="59" r="1" fill="white" />
      <circle cx="60" cy="59" r="1" fill="white" />

      {/* Long fluttery lashes */}
      <line x1="25" y1="48" x2="22" y2="44" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="29" y1="46" x2="27" y2="42" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="33" y1="45" x2="32" y2="41" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="37" y1="46" x2="37" y2="42" stroke="#7C3AED" strokeWidth="1.8" strokeLinecap="round" />

      {/* Rosy cheeks */}
      <circle cx="24" cy="66" r="7" fill="#FDA4AF" opacity="0.45" />
      <circle cx="66" cy="66" r="7" fill="#FDA4AF" opacity="0.45" />

      {/* Pink nostrils */}
      <circle cx="41" cy="70" r="3" fill="#FBCFE8" />
      <circle cx="51" cy="70" r="3" fill="#FBCFE8" />

      {/* Sweet smile */}
      <path d="M36 76 Q46 84 56 76" stroke="#C084FC" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* Sparkle stars around the face */}
      <path d="M76 56 L78 50 L80 56 L86 58 L80 60 L78 66 L76 60 L70 58Z" fill="#FDE68A" />
      <path d="M14 44 L15.5 40 L17 44 L21 45.5 L17 47 L15.5 51 L14 47 L10 45.5Z" fill="#F9A8D4" />
    </svg>
  )
}

export function Octopus({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 8 curling tentacles */}
      <path d="M28 68 Q14 78 12 92 Q18 88 22 96 Q24 86 28 80 Q32 74 34 70" stroke="#BE185D" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M36 72 Q28 84 30 98 Q36 92 36 100 Q40 90 40 80 Q40 74 40 70" stroke="#EC4899" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M46 74 Q44 88 46 100 Q50 92 50 100 Q52 88 50 74" stroke="#BE185D" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M56 73 Q58 86 54 98 Q60 92 62 100 Q60 88 58 78 Q58 74 58 70" stroke="#EC4899" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M64 70 Q68 82 68 96 Q74 88 72 100 Q74 86 72 76 Q70 72 66 68" stroke="#BE185D" strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M72 66 Q82 74 86 88 Q90 82 88 94 Q84 82 80 76 Q76 70 70 64" stroke="#EC4899" strokeWidth="8" fill="none" strokeLinecap="round" />
      {/* Suckers on tentacles */}
      <circle cx="18" cy="84" r="3" fill="#F9A8D4" />
      <circle cx="30" cy="91" r="3" fill="#F9A8D4" />
      <circle cx="46" cy="88" r="3" fill="#F9A8D4" />
      <circle cx="64" cy="88" r="3" fill="#F9A8D4" />
      <circle cx="80" cy="82" r="3" fill="#F9A8D4" />
      {/* Round body */}
      <ellipse cx="50" cy="52" rx="36" ry="28" fill="#EC4899" />
      {/* Head dome */}
      <ellipse cx="50" cy="38" rx="30" ry="26" fill="#F472B6" />
      {/* Spots */}
      <circle cx="34" cy="28" r="6" fill="#BE185D" opacity="0.35" />
      <circle cx="66" cy="28" r="6" fill="#BE185D" opacity="0.35" />
      <circle cx="50" cy="22" r="6" fill="#BE185D" opacity="0.35" />
      {/* Big eyes */}
      <circle cx="36" cy="46" r="11" fill="white" />
      <circle cx="64" cy="46" r="11" fill="white" />
      <circle cx="37" cy="47" r="8" fill="#1C1917" />
      <circle cx="65" cy="47" r="8" fill="#1C1917" />
      <circle cx="38.5" cy="45" r="3.5" fill="white" />
      <circle cx="66.5" cy="45" r="3.5" fill="white" />
      {/* Happy mouth */}
      <path d="M40 58 Q50 66 60 58" stroke="#BE185D" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Zebra({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ears — pointy upright horse ears */}
      <polygon points="28,38 22,12 42,32" fill="white" />
      <polygon points="72,38 78,12 58,32" fill="white" />
      <polygon points="29,36 25,16 40,32" fill="#1C1917" opacity="0.4" />
      <polygon points="71,36 75,16 60,32" fill="#1C1917" opacity="0.4" />
      <polygon points="30,35 27,20 39,32" fill="#FCA5A5" />
      <polygon points="70,35 73,20 61,32" fill="#FCA5A5" />

      {/* Spiky mane — short black spikes along the very top */}
      <polygon points="38,28 40,14 43,28" fill="#1C1917" />
      <polygon points="44,26 46,10 49,26" fill="#1C1917" />
      <polygon points="50,25 52,8 55,25" fill="#1C1917" />
      <polygon points="56,26 58,12 61,26" fill="#1C1917" />

      {/* HEAD — white base, horse-shaped */}
      <path d="M18,50 Q18,28 36,20 Q43,16 50,16 Q57,16 64,20 Q82,28 82,50 Q80,64 66,72 Q58,76 50,76 Q42,76 34,72 Q20,64 18,50Z" fill="white" />

      {/* STRIPES — thin lines only, not solid filled bands */}
      {/* Forehead stripe - thin */}
      <path d="M34,30 Q50,27 66,30 L65,35 Q50,33 35,35Z" fill="#1C1917" opacity="0.7" />
      {/* Side stripes on cheeks - narrow */}
      <path d="M20,46 Q34,43 38,46 L37,51 Q33,49 19,51Z" fill="#1C1917" opacity="0.7" />
      <path d="M80,46 Q66,43 62,46 L63,51 Q67,49 81,51Z" fill="#1C1917" opacity="0.7" />
      {/* Stripe across bridge of nose */}
      <path d="M36,56 Q50,53 64,56 L63,61 Q50,59 37,61Z" fill="#1C1917" opacity="0.6" />

      {/* Eyes — large, kind, horse eyes — drawn ON TOP of stripes */}
      <ellipse cx="34" cy="46" rx="9" ry="8" fill="white" />
      <ellipse cx="66" cy="46" rx="9" ry="8" fill="white" />
      <circle cx="35" cy="47" r="6" fill="#78350F" />
      <circle cx="67" cy="47" r="6" fill="#78350F" />
      <circle cx="35" cy="47" r="3.2" fill="#1C1917" />
      <circle cx="67" cy="47" r="3.2" fill="#1C1917" />
      <circle cx="35.8" cy="45.5" r="1.4" fill="white" />
      <circle cx="67.8" cy="45.5" r="1.4" fill="white" />
      {/* Eyelashes */}
      <line x1="27" y1="39" x2="25" y2="36" stroke="#1C1917" strokeWidth="1.3" />
      <line x1="31" y1="38" x2="30" y2="35" stroke="#1C1917" strokeWidth="1.3" />
      <line x1="35" y1="38" x2="35" y2="35" stroke="#1C1917" strokeWidth="1.3" />

      {/* Long horse snout */}
      <ellipse cx="50" cy="74" rx="15" ry="14" fill="#F3F4F6" />
      {/* Snout stripe — just one thin stripe */}
      <rect x="39" y="70" width="22" height="5" rx="2.5" fill="#1C1917" opacity="0.2" />

      {/* Nostrils */}
      <ellipse cx="44" cy="77" rx="3.5" ry="2.5" fill="#9CA3AF" />
      <ellipse cx="56" cy="77" rx="3.5" ry="2.5" fill="#9CA3AF" />

      {/* Smile */}
      <path d="M43,83 Q50,88 57,83" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Duck({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tail feathers — curled up at back */}
      <path d="M76 58 Q90 46 94 34 Q86 48 80 54Z" fill="#EAB308" />
      <path d="M76 63 Q92 54 96 42 Q88 56 80 60Z" fill="#F59E0B" />

      {/* BODY — big round, rich golden yellow */}
      <ellipse cx="48" cy="70" rx="34" ry="26" fill="#EAB308" />
      {/* Wing */}
      <ellipse cx="54" cy="72" rx="20" ry="14" fill="#D97706" />
      {/* Wing feather lines */}
      <path d="M38 70 Q54 64 70 70" stroke="#B45309" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M36 75 Q54 69 72 75" stroke="#B45309" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Neck */}
      <ellipse cx="40" cy="52" rx="14" ry="16" fill="#EAB308" />

      {/* Head — round, GREEN mallard */}
      <circle cx="36" cy="36" r="22" fill="#15803D" />
      {/* White neck ring */}
      <ellipse cx="38" cy="54" rx="12" ry="5" fill="white" />

      {/* Eye */}
      <circle cx="24" cy="32" r="7" fill="white" />
      <circle cx="25" cy="33" r="5" fill="#1C1917" />
      <circle cx="26.5" cy="31.5" r="2" fill="white" />

      {/* WIDE flat orange bill */}
      <path d="M8 36 Q16 30 26 34 Q24 42 16 44 Q8 42 8 36Z" fill="#F97316" />
      <line x1="8" y1="40" x2="26" y2="40" stroke="#EA580C" strokeWidth="1.5" />

      {/* Orange feet */}
      <path d="M32 94 Q24 100 18 97 Q24 92 30 90Z" fill="#F97316" />
      <path d="M50 94 Q42 100 36 97 Q42 92 48 90Z" fill="#F97316" />
      <rect x="28" y="88" width="6" height="8" rx="3" fill="#F97316" />
      <rect x="46" y="88" width="6" height="8" rx="3" fill="#F97316" />
    </svg>
  )
}

export function Donkey({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neck / body base */}
      <ellipse cx="50" cy="86" rx="28" ry="16" fill="#9CA3AF" />
      {/* Head — long rectangular donkey head */}
      <path d="M16,54 Q16,28 36,20 Q44,16 50,16 Q56,16 64,20 Q84,28 84,54 Q82,70 68,76 Q58,80 50,80 Q42,80 32,76 Q18,70 16,54Z" fill="#9CA3AF" />
      {/* Lighter muzzle area */}
      <ellipse cx="50" cy="68" rx="18" ry="14" fill="#D1D5DB" />
      {/* VERY LONG EARS — the donkey's defining feature */}
      <path d="M28,38 Q24,6 32,2 Q38,6 38,38" fill="#9CA3AF" />
      <path d="M72,38 Q76,6 68,2 Q62,6 62,38" fill="#9CA3AF" />
      {/* Inner ear pink */}
      <path d="M29,36 Q26,10 32,6 Q36,8 36,36" fill="#FCA5A5" />
      <path d="M71,36 Q74,10 68,6 Q64,8 64,36" fill="#FCA5A5" />
      {/* Eyes — large kind donkey eyes */}
      <circle cx="36" cy="48" r="9" fill="white" />
      <circle cx="64" cy="48" r="9" fill="white" />
      <circle cx="37" cy="49" r="6.5" fill="#78350F" />
      <circle cx="65" cy="49" r="6.5" fill="#78350F" />
      <circle cx="37" cy="49" r="3.5" fill="#1C1917" />
      <circle cx="65" cy="49" r="3.5" fill="#1C1917" />
      <circle cx="37.5" cy="47.5" r="1.5" fill="white" />
      <circle cx="65.5" cy="47.5" r="1.5" fill="white" />
      {/* Eyelashes */}
      <line x1="30" y1="41" x2="28" y2="38" stroke="#6B7280" strokeWidth="1.5" />
      <line x1="34" y1="40" x2="33" y2="37" stroke="#6B7280" strokeWidth="1.5" />
      {/* Big flat nostrils on long muzzle */}
      <ellipse cx="43" cy="70" rx="5" ry="3.5" fill="#6B7280" />
      <ellipse cx="57" cy="70" rx="5" ry="3.5" fill="#6B7280" />
      {/* Smile */}
      <path d="M40 76 Q50 82 60 76" stroke="#6B7280" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Scruffy mane on top */}
      <path d="M36 28 Q40 18 44 26 Q48 14 52 24 Q56 12 60 24 Q64 16 66 28" stroke="#6B7280" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Horse({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Neck/body base */}
      <ellipse cx="50" cy="90" rx="26" ry="14" fill="#B45309" />

      {/* Flowing mane — left side */}
      <path d="M28 16 Q14 26 12 44 Q18 36 16 48 Q24 38 22 52 Q30 42 28 54" fill="#78350F" />
      <path d="M30 14 Q18 24 16 40 Q22 32 20 44 Q26 36 24 50 Q32 40 30 52" fill="#92400E" />

      {/* HEAD — tall oval, front-facing */}
      <ellipse cx="50" cy="42" rx="28" ry="36" fill="#D97706" />

      {/* Tall pointed ears */}
      <polygon points="32,18 26,2 40,14" fill="#D97706" />
      <polygon points="68,18 74,2 60,14" fill="#D97706" />
      <polygon points="33,17 28,6 39,14" fill="#FCA5A5" />
      <polygon points="67,17 72,6 61,14" fill="#FCA5A5" />

      {/* LONG snout — extends noticeably below eyes */}
      <ellipse cx="50" cy="62" rx="18" ry="22" fill="#F59E0B" />

      {/* Big soulful eyes */}
      <circle cx="34" cy="42" r="10" fill="white" />
      <circle cx="66" cy="42" r="10" fill="white" />
      <circle cx="35" cy="43" r="7" fill="#78350F" />
      <circle cx="67" cy="43" r="7" fill="#78350F" />
      <circle cx="35" cy="43" r="4" fill="#1C1917" />
      <circle cx="67" cy="43" r="4" fill="#1C1917" />
      <circle cx="36" cy="41" r="2" fill="white" />
      <circle cx="68" cy="41" r="2" fill="white" />
      {/* Eyelashes */}
      <line x1="27" y1="34" x2="25" y2="31" stroke="#92400E" strokeWidth="1.5" />
      <line x1="31" y1="33" x2="30" y2="30" stroke="#92400E" strokeWidth="1.5" />
      <line x1="35" y1="32" x2="35" y2="29" stroke="#92400E" strokeWidth="1.5" />

      {/* Large nostrils on snout */}
      <ellipse cx="43" cy="68" rx="5" ry="4" fill="#B45309" />
      <ellipse cx="57" cy="68" rx="5" ry="4" fill="#B45309" />

      {/* Smile */}
      <path d="M40 76 Q50 83 60 76" stroke="#B45309" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Fish({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* TAIL — forked, at the left */}
      <path d="M18 46 Q2 32 0 18 Q10 34 0 46 Q10 50 18 52Z" fill="#1D4ED8" />
      {/* BODY — fat round tropical fish body */}
      <ellipse cx="58" cy="52" rx="36" ry="26" fill="#3B82F6" />
      {/* Colorful vertical stripes — tropical fish */}
      <path d="M42 28 Q46 52 42 76 Q50 76 50 52 Q50 28 42 28Z" fill="#F97316" opacity="0.8" />
      <path d="M56 28 Q60 52 56 76 Q64 76 64 52 Q64 28 56 28Z" fill="#F97316" opacity="0.8" />
      {/* Dorsal fin — tall and spiky on top */}
      <path d="M36 28 Q44 8 52 20 Q58 8 64 18 Q68 8 72 22 Q74 28 72 32 Q58 26 36 32Z" fill="#1D4ED8" />
      {/* Pectoral fin */}
      <path d="M52 56 Q40 68 42 80 Q52 72 56 64Z" fill="#60A5FA" />
      {/* Anal fin bottom */}
      <path d="M54 74 Q48 88 52 92 Q58 86 60 76Z" fill="#1D4ED8" />
      {/* White belly */}
      <ellipse cx="62" cy="60" rx="24" ry="14" fill="#BFDBFE" opacity="0.6" />
      {/* Scales — circle pattern */}
      <circle cx="52" cy="44" r="8" fill="none" stroke="#1D4ED8" strokeWidth="1.5" opacity="0.5" />
      <circle cx="66" cy="44" r="8" fill="none" stroke="#1D4ED8" strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="56" r="8" fill="none" stroke="#1D4ED8" strokeWidth="1.5" opacity="0.5" />
      {/* Eye — big with white ring */}
      <circle cx="82" cy="46" r="11" fill="white" />
      <circle cx="83" cy="47" r="8" fill="#1C1917" />
      <circle cx="85" cy="44" r="3.5" fill="white" />
      {/* Mouth — small O shape */}
      <circle cx="96" cy="52" r="4" fill="none" stroke="#1D4ED8" strokeWidth="2" />
      <circle cx="96" cy="52" r="2" fill="#BFDBFE" />
    </svg>
  )
}

export function Monkey({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Big round ears — the monkey's key shape */}
      <circle cx="16" cy="46" r="16" fill="#92400E" />
      <circle cx="84" cy="46" r="16" fill="#92400E" />
      <circle cx="16" cy="46" r="10" fill="#D97706" />
      <circle cx="84" cy="46" r="10" fill="#D97706" />
      {/* Head — round and wide */}
      <circle cx="50" cy="50" r="36" fill="#92400E" />
      {/* Lighter face oval */}
      <ellipse cx="50" cy="56" rx="26" ry="28" fill="#D97706" />
      {/* Forehead darker fur */}
      <ellipse cx="50" cy="30" rx="28" ry="14" fill="#78350F" />
      {/* Big round muzzle — protruding snout */}
      <ellipse cx="50" cy="70" rx="18" ry="14" fill="#FCD34D" />
      {/* Eyes — big, round, expressive */}
      <circle cx="36" cy="46" r="10" fill="white" />
      <circle cx="64" cy="46" r="10" fill="white" />
      <circle cx="37" cy="47" r="7.5" fill="#78350F" />
      <circle cx="65" cy="47" r="7.5" fill="#78350F" />
      <circle cx="37" cy="47" r="4.5" fill="#1C1917" />
      <circle cx="65" cy="47" r="4.5" fill="#1C1917" />
      <circle cx="38.5" cy="45.5" r="2" fill="white" />
      <circle cx="66.5" cy="45.5" r="2" fill="white" />
      {/* Eyebrows — expressive arches */}
      <path d="M28 38 Q36 34 44 38" stroke="#78350F" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M56 38 Q64 34 72 38" stroke="#78350F" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Nostrils on muzzle */}
      <circle cx="44" cy="68" r="3.5" fill="#B45309" />
      <circle cx="56" cy="68" r="3.5" fill="#B45309" />
      {/* Big grinning smile */}
      <path d="M36 75 Q50 86 64 75" stroke="#B45309" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Teeth showing */}
      <path d="M38 76 Q50 84 62 76 Q50 82 38 76Z" fill="white" opacity="0.8" />
    </svg>
  )
}

export function Whale({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Water spray from blowhole */}
      <path d="M34 22 Q30 14 28 6" stroke="#93C5FD" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M38 20 Q36 12 36 4" stroke="#BFDBFE" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M42 22 Q42 14 44 6" stroke="#93C5FD" strokeWidth="2.5" fill="none" strokeLinecap="round" />

      {/* TAIL fluke — forked, right side */}
      <path d="M76 46 Q90 34 92 22 Q85 36 92 44 Q85 50 76 50Z" fill="#1E40AF" />

      {/* BODY */}
      <ellipse cx="46" cy="58" rx="38" ry="22" fill="#1D4ED8" />

      {/* White belly */}
      <path d="M14 62 Q34 74 62 72 Q74 70 80 62 Q58 76 14 70Z" fill="#BFDBFE" />

      {/* DORSAL FIN */}
      <path d="M52 36 Q58 20 66 36" fill="#1E40AF" />

      {/* FLIPPER */}
      <path d="M28 68 Q16 80 18 90 Q26 82 32 74 Q36 68 32 64Z" fill="#1E40AF" />

      {/* HEAD — rounded left */}
      <ellipse cx="16" cy="56" rx="16" ry="20" fill="#1D4ED8" />

      {/* Eye */}
      <circle cx="14" cy="50" r="8" fill="white" />
      <circle cx="15" cy="51" r="5.5" fill="#1C1917" />
      <circle cx="16.5" cy="49.5" r="2.5" fill="white" />

      {/* Blowhole */}
      <ellipse cx="38" cy="38" rx="4" ry="2.5" fill="#1E40AF" />

      {/* Smile */}
      <path d="M6 62 Q14 72 22 66" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  )
}

export function Dog({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body / neck base */}
      <ellipse cx="50" cy="88" rx="28" ry="14" fill="#D97706" />
      {/* HEAD — round and friendly */}
      <circle cx="50" cy="52" r="36" fill="#D97706" />
      {/* BIG FLOPPY EARS — the dog's defining feature */}
      <path d="M14 36 Q6 52 10 72 Q20 76 26 60 Q30 46 26 36Z" fill="#B45309" />
      <path d="M86 36 Q94 52 90 72 Q80 76 74 60 Q70 46 74 36Z" fill="#B45309" />
      {/* Inner ear lighter */}
      <path d="M16 40 Q10 54 14 68 Q20 70 24 58 Q28 46 24 40Z" fill="#D97706" opacity="0.5" />
      <path d="M84 40 Q90 54 86 68 Q80 70 76 58 Q72 46 76 40Z" fill="#D97706" opacity="0.5" />
      {/* Pale face area */}
      <ellipse cx="50" cy="58" rx="26" ry="24" fill="#FCD34D" opacity="0.4" />
      {/* Big round muzzle */}
      <ellipse cx="50" cy="66" rx="18" ry="14" fill="#FDE68A" />
      {/* Eyes — big puppy eyes */}
      <circle cx="36" cy="46" r="10" fill="white" />
      <circle cx="64" cy="46" r="10" fill="white" />
      <circle cx="37" cy="47" r="7.5" fill="#78350F" />
      <circle cx="65" cy="47" r="7.5" fill="#78350F" />
      <circle cx="37" cy="47" r="4" fill="#1C1917" />
      <circle cx="65" cy="47" r="4" fill="#1C1917" />
      <circle cx="38.5" cy="45.5" r="2" fill="white" />
      <circle cx="66.5" cy="45.5" r="2" fill="white" />
      {/* Big black nose */}
      <ellipse cx="50" cy="62" rx="7" ry="5" fill="#1C1917" />
      <ellipse cx="48" cy="61" rx="2" ry="1.5" fill="#374151" />
      {/* Tongue hanging out */}
      <path d="M42 68 Q50 66 58 68 Q58 76 50 80 Q42 76 42 68Z" fill="#EF4444" />
      <line x1="50" y1="68" x2="50" y2="80" stroke="#DC2626" strokeWidth="1.5" />
      {/* Forehead spot */}
      <circle cx="50" cy="34" r="10" fill="#B45309" opacity="0.5" />
    </svg>
  )
}

export function Bird({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tail feathers */}
      <path d="M72 72 Q84 84 86 96 Q78 88 72 96 Q68 86 74 76Z" fill="#DC2626" />
      <path d="M64 76 Q74 88 74 100 Q66 92 62 100 Q60 88 66 80Z" fill="#B91C1C" />
      {/* BODY — plump round robin body */}
      <ellipse cx="50" cy="68" rx="30" ry="24" fill="#DC2626" />
      {/* Red breast — rounder circle */}
      <ellipse cx="48" cy="72" rx="22" ry="18" fill="#EF4444" />
      {/* Wings */}
      <path d="M22 60 Q14 72 16 88 Q24 80 30 70 Q36 62 32 58Z" fill="#1C1917" />
      <path d="M78 60 Q86 72 84 88 Q76 80 70 70 Q64 62 68 58Z" fill="#1C1917" />
      {/* HEAD — small round on top */}
      <circle cx="50" cy="36" r="22" fill="#1C1917" />
      {/* RED ROBIN CAP — the bird's identifier */}
      <ellipse cx="50" cy="26" rx="18" ry="12" fill="#DC2626" />
      {/* Eyes — bright white on black head */}
      <circle cx="38" cy="34" r="8" fill="white" />
      <circle cx="62" cy="34" r="8" fill="white" />
      <circle cx="39" cy="35" r="5.5" fill="#1C1917" />
      <circle cx="63" cy="35" r="5.5" fill="#1C1917" />
      <circle cx="40.5" cy="33.5" r="2.5" fill="white" />
      <circle cx="64.5" cy="33.5" r="2.5" fill="white" />
      {/* Short sharp beak */}
      <path d="M40 44 Q50 42 60 44 Q55 52 50 56 Q45 52 40 44Z" fill="#F59E0B" />
      <line x1="40" y1="44" x2="60" y2="44" stroke="#D97706" strokeWidth="1.5" />
      {/* Stick legs */}
      <line x1="42" y1="90" x2="36" y2="100" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="90" x2="64" y2="100" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export function Owl({ size = 80 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body — rounded and fluffy */}
      <ellipse cx="50" cy="72" rx="28" ry="24" fill="#78350F" />
      {/* Wing pattern */}
      <path d="M24 58 Q16 72 18 90 Q28 82 32 68 Q36 58 34 54Z" fill="#92400E" />
      <path d="M76 58 Q84 72 82 90 Q72 82 68 68 Q64 58 66 54Z" fill="#92400E" />
      {/* Belly — speckled light area */}
      <ellipse cx="50" cy="74" rx="18" ry="18" fill="#FDE68A" />
      {/* Speckle dots */}
      <circle cx="44" cy="68" r="2.5" fill="#D97706" opacity="0.6" />
      <circle cx="50" cy="66" r="2.5" fill="#D97706" opacity="0.6" />
      <circle cx="56" cy="68" r="2.5" fill="#D97706" opacity="0.6" />
      <circle cx="46" cy="74" r="2.5" fill="#D97706" opacity="0.6" />
      <circle cx="54" cy="74" r="2.5" fill="#D97706" opacity="0.6" />
      {/* HEAD — round with flat face */}
      <circle cx="50" cy="42" r="30" fill="#92400E" />
      {/* TUFTS — the owl's ear tufts, very distinctive */}
      <polygon points="32,18 26,2 38,16" fill="#78350F" />
      <polygon points="68,18 74,2 62,16" fill="#78350F" />
      <polygon points="33,18 28,6 38,16" fill="#B45309" />
      <polygon points="67,18 72,6 62,16" fill="#B45309" />
      {/* Flat face disc — facial disc feature */}
      <ellipse cx="50" cy="46" rx="26" ry="24" fill="#D97706" opacity="0.4" />
      {/* HUGE round eyes — the owl's iconic feature */}
      <circle cx="34" cy="42" r="14" fill="#FEF9C3" />
      <circle cx="66" cy="42" r="14" fill="#FEF9C3" />
      {/* Orange iris */}
      <circle cx="34" cy="42" r="11" fill="#F97316" />
      <circle cx="66" cy="42" r="11" fill="#F97316" />
      {/* Pupils */}
      <circle cx="34" cy="42" r="7" fill="#1C1917" />
      <circle cx="66" cy="42" r="7" fill="#1C1917" />
      <circle cx="32.5" cy="40" r="3" fill="white" />
      <circle cx="64.5" cy="40" r="3" fill="white" />
      {/* Sharp hooked beak between eyes */}
      <path d="M44 52 Q50 48 56 52 Q52 60 50 62 Q48 60 44 52Z" fill="#F59E0B" />
      {/* Claws */}
      <path d="M36 94 Q30 98 26 96 Q30 92 34 90Z" fill="#F59E0B" />
      <path d="M44 96 Q40 100 36 98 Q40 94 42 92Z" fill="#F59E0B" />
      <path d="M64 94 Q70 98 74 96 Q70 92 66 90Z" fill="#F59E0B" />
      <path d="M56 96 Q60 100 64 98 Q60 94 58 92Z" fill="#F59E0B" />
    </svg>
  )
}

export const ANIMAL_COMPONENTS: Record<string, React.ComponentType<{ size?: number }>> = {
  lion: Lion,
  wolf: Wolf,
  giraffe: Giraffe,
  bear: Bear,
  chicken: Chicken,
  cat: Cat,
  tiger: Tiger,
  elephant: Elephant,
  frog: Frog,
  fox: Fox,
  penguin: Penguin,
  butterfly: Butterfly,
  dolphin: Dolphin,
  unicorn: Unicorn,
  octopus: Octopus,
  zebra: Zebra,
  duck: Duck,
  donkey: Donkey,
  horse: Horse,
  fish: Fish,
  monkey: Monkey,
  whale: Whale,
  dog: Dog,
  bird: Bird,
  owl: Owl,
}
