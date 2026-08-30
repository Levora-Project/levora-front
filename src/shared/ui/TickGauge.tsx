const TICK_COUNT = 24;
const START_ANGLE = -110;
const END_ANGLE = 110;
const CENTER = 70;
const RADIUS = 54;
const TICK_LENGTH = 14;
const TICK_WIDTH = 6;

export interface TickGaugeProps {
  /** 0-100 */
  value: number;
  size?: number;
}

/** Radial tick-mark arc gauge — pure SVG, each tick is a small rounded rect
 * fanned out around the center via `rotate()`. No charting library needed. */
export function TickGauge({ value, size = 140 }: TickGaugeProps) {
  const clamped = Math.min(100, Math.max(0, value));
  const filledCount = Math.round((clamped / 100) * TICK_COUNT);

  return (
    <svg width={size} height={size} viewBox="0 0 140 140">
      {Array.from({ length: TICK_COUNT }).map((_, index) => {
        const angle =
          START_ANGLE +
          (index / (TICK_COUNT - 1)) * (END_ANGLE - START_ANGLE);
        const filled = index < filledCount;
        const deepFilled = index < filledCount * 0.5;
        const colorClass = filled
          ? deepFilled
            ? "fill-primary-800"
            : "fill-primary-600"
          : "fill-neutral-100";

        return (
          <rect
            key={index}
            x={CENTER - TICK_WIDTH / 2}
            y={CENTER - RADIUS - TICK_LENGTH}
            width={TICK_WIDTH}
            height={TICK_LENGTH}
            rx={TICK_WIDTH / 2}
            transform={`rotate(${angle} ${CENTER} ${CENTER})`}
            className={colorClass}
          />
        );
      })}
    </svg>
  );
}
