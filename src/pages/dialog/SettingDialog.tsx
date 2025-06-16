import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/component/ui/dialog";
import { Label } from "@/component/ui/label";
import { Switch } from "@/component/ui/switch";
import { Slider } from "@/component/ui/slider";
import useSettingContext from "@/context/SettingContext";
import useSoundContext from "@/context/SoundContext";

const SettingDialog = () => {
  const SettingContext = useSettingContext();
  const SoundContext = useSoundContext();

  const handleVolumeChange = (value: number[]) => SoundContext.setVolume((Math.round(value[0] / 10) * 10) / 100);
  const getVolumePercentage = () => Math.round(SoundContext.volume * 100);

  return (
    <Dialog open={SettingContext.isDialogOpen} onOpenChange={() => SettingContext.closeDialog()}>
      <DialogContent className="w-4/5 h-9/10 bg-transparent backdrop-blur overflow-y-auto">
        <DialogHeader className="border-b py-2 text-center">
          <DialogTitle>Cài đặt chung</DialogTitle>
          <DialogDescription>Điều chỉnh âm thanh và các tùy chọn khác của ứng dụng</DialogDescription>
        </DialogHeader>

        <div className="grid">
          {/* Volume Settings */}
          <div className="space-y-4 py-4 border-b">
            <Label className="text-base font-medium">Âm thanh</Label>

            {/* Mute Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="mute-toggle" className="text-sm">
                  Tắt tiếng
                </Label>
                <p className="text-xs text-muted-foreground">Tắt tất cả nguồn âm thanh</p>
              </div>
              <Switch id="mute-toggle" checked={SoundContext.muted} onCheckedChange={SoundContext.toggle_mute} />
            </div>

            {/* Volume Slider */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="volume-slider" className="text-sm">
                  Âm lượng
                  {SoundContext.muted && (
                    <span className="text-xs text-muted-foreground"> Hủy tắt tiếng để điều chỉnh</span>
                  )}
                </Label>
                <span className="text-sm text-muted-foreground">{getVolumePercentage()}%</span>
              </div>
              <Slider
                id="volume-slider"
                min={0}
                max={100}
                step={1}
                value={[getVolumePercentage()]}
                onValueChange={handleVolumeChange}
                disabled={SoundContext.muted}
                className="w-full"
              />
            </div>
          </div>

          {/* Additional Settings Section */}
          <div className="space-y-4 py-4 border-b">
            <Label className="text-base font-medium">Cài đặt khác</Label>

            {/* Example: Auto-play toggle */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="autoplay-toggle" className="text-sm">
                  Tự động phát
                </Label>
                <p className="text-xs text-muted-foreground">Để trưng cho đỡ trống</p>
              </div>
              <Switch
                id="autoplay-toggle"
                // Add your autoplay state here
                // checked={autoplay}
                // onCheckedChange={setAutoplay}
              />
            </div>

            {/* Example: Theme toggle */}
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="theme-toggle" className="text-sm">
                  Chế độ tối
                </Label>
                <p className="text-xs text-muted-foreground">Để trưng cho đỡ trống</p>
              </div>
              <Switch
                id="theme-toggle"
                // Add your theme state here
                // checked={isDarkMode}
                // onCheckedChange={setIsDarkMode}
              />
            </div>
          </div>
        </div>

        <DialogFooter>
          <DialogClose>Đóng</DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SettingDialog;
