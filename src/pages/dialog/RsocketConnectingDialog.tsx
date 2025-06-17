import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/component/ui/dialog";

export default function RsocketConnectingDialog() {
  return (
    <Dialog open={true}>
      <DialogContent showCloseButton={false}>
        <DialogHeader className="text-center">
          <DialogTitle className="text-lg font-semibold">Đang kết nối tới máy chủ</DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            Vui lòng chờ trong giây lát, chúng tôi đang thiết lập kết nối với backend.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          Nếu bạn thấy màn hình này quá lâu, hãy giúp chúng tôi bằng cách <br />
          báo lỗi tại server chính thức có trong mô tả của bot.
        </div>
      </DialogContent>
    </Dialog>
  );
}
