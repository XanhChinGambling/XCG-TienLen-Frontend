import { DISCORD_REDIRECT_URI } from "@/constants/Common";
import { AlertDialog, Button, Flex } from "@radix-ui/themes";

export default function NotLoginArlet() {
  return (
    <AlertDialog.Root open={true}>
      <AlertDialog.Content size="4">
        <AlertDialog.Title>Yêu cầu bắt buộc đăng nhập</AlertDialog.Title>
        <AlertDialog.Description size="2">
          Bạn phải đăng nhập nếu muốn sử dụng trên trình duyệt web. <br />
          Bạn có thể sử dụng tài khoản Discord của mình để đăng nhập.
        </AlertDialog.Description>

        <Flex gap="3" mt="4" justify="end">
          <AlertDialog.Action>
            <Button asChild variant="soft" color="blue">
              <a href={DISCORD_REDIRECT_URI}>Đăng nhập với Discord</a>
            </Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
}
