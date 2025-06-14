import { Button } from "@/component/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/component/ui/dialog";
import { Sparkles } from "lucide-react";
import { DISCORD_REDIRECT_URI } from "@/constants/Enviroment";

export default function NotLoginDialog() {
  return (
    <Dialog open={true}>
      <DialogContent showCloseButton={false}>
        {/* Header */}
        <DialogHeader className="w-full">
          <div className="space-y-2">
            <DialogTitle className="text-center font-semibold">Đăng nhập để tiếp tục</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Trải nghiệm đầy đủ tính năng với tài khoản của bạn. <br />
              Đăng nhập nhanh chóng và bảo mật với Discord.
            </DialogDescription>
          </div>
        </DialogHeader>

        {/* Features list */}
        <div className="space-y-2">
          <div className="flex items-center gap-4">
            <div className="size-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-25p" />
            <span className="text-muted-foreground text-sm">Truy cập không giới hạn tất cả tính năng</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="size-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-25p" />
            <span className="text-muted-foreground text-sm">Đồng bộ dữ liệu trên mọi thiết bị</span>
          </div>
        </div>

        {/* Login button */}
        <div className="space-y-2">
          <Button
            asChild
            className="w-full p-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:scale-105 duration-500">
            <a href={DISCORD_REDIRECT_URI} className="flex items-center justify-center gap-4">
              <Sparkles className="size-5 text-foreground" />
              <span className="font-semibold text-foreground">Đăng nhập với Discord</span>
            </a>
          </Button>

          {/* Error report notice */}
          <div className="text-center text-xs text-muted-foreground">
            DiscordSdk không tự động đăng nhập? <br />
            Giúp chúng tôi báo lỗi ở server chính thức có ở trong mô tả của bot
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
