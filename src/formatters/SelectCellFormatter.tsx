import { useFocusRef } from '../hooks/useFocusRef';
import type { CheckboxFormatterProps } from '../types';
import { useDefaultRenderers } from '../DataGridDefaultRenderersProvider';

type SharedInputProps = Pick<CheckboxFormatterProps, 'disabled' | 'aria-label' | 'aria-labelledby'>;

interface SelectCellFormatterProps extends SharedInputProps {
  isCellSelected: boolean;
  value: boolean;
  onChange: (value: boolean, isShiftClick: boolean) => void;
}

export function SelectCellFormatter({
  value,
  isCellSelected,
  disabled,
  onChange,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy
}: SelectCellFormatterProps) {
  const { ref, tabIndex } = useFocusRef<HTMLInputElement>(isCellSelected);
  const checkboxFormatter = useDefaultRenderers()!.checkboxFormatter!;

  return (
    <>
      {checkboxFormatter(
        {
          'aria-label': ariaLabel,
          'aria-labelledby': ariaLabelledBy,
          tabIndex,
          disabled,
          checked: value,
          onChange
        },
        ref
      )}
    </>
  );
}
