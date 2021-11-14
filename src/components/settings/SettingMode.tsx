// material
import ModeSwitch from 'components/MuiSwitch';
// hooks
import useSettings from '../../hooks/useSettings';

// ----------------------------------------------------------------------

export default function SettingMode() {
  const { themeMode, onChangeMode } = useSettings();

  return <ModeSwitch checked={themeMode === 'dark'} onChange={onChangeMode} />;
}
