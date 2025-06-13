import { Button } from "@/component/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/component/ui/dialog";
import { MessageCircle, Sparkles } from "lucide-react";
import { DISCORD_REDIRECT_URI } from "@/constants/Enviroment";

export default function NotLoginDialog() {
  return (
    <Dialog open={true}>
      <DialogContent
        showCloseButton={false}
        className="max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-2xl">
        <div className="relative">
          <DialogHeader className="text-center space-y-4 pb-6">
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Đăng nhập để tiếp tục
              </DialogTitle>
              <DialogDescription className="text-slate-600 leading-relaxed">
                Trải nghiệm đầy đủ tính năng với tài khoản của bạn.
                <br />
                Đăng nhập nhanh chóng và bảo mật với Discord.
              </DialogDescription>
            </div>
          </DialogHeader>

          {/* Features list */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              <span>Truy cập không giới hạn tất cả tính năng</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
              <span>Đồng bộ dữ liệu trên mọi thiết bị</span>
            </div>
          </div>

          {/* Login button */}
          <div className="space-y-3">
            <Button
              asChild
              className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 group">
              <a href={DISCORD_REDIRECT_URI} className="flex items-center justify-center gap-3">
                <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
                <span>Đăng nhập với Discord</span>
                <Sparkles className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity duration-200" />
              </a>
            </Button>

            {/* Error report notice */}
            <div className="text-center text-xs text-slate-500 leading-relaxed">
              DiscordSdk không tự động đăng nhập? Giúp chúng tôi báo lỗi ở server chính thức
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
