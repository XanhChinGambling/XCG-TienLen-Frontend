import useSoundContext from "@/context/SoundContext";
import useSettingContext from "@/context/SettingContext";
import useNetworkStatus from "@/hook/useNetworkStatus";
import { FormatNumber } from "@/util/CommonUtil";
import {
  Settings,
  ShoppingCart,
  Plus,
  Crown,
  Diamond,
  Coins,
  Users,
  Gift,
  Bell,
  Volume2,
  VolumeX,
  Wifi,
  WifiOff,
  Zap,
  Heart,
  BarChart3,
  Flame,
  Sword,
  Star,
  Trophy,
} from "lucide-react";
import useTienLenStatContext from "@/context/TienLenStatContext";

// Top Navigation Bar Component
function TopNavigationBar() {
  const SettingContext = useSettingContext();
  const IsOnlineContext = useNetworkStatus();
  const SoundContext = useSoundContext();
  const TLStatContext = useTienLenStatContext();

  const stats = [
    { label: "Người chơi", value: TLStatContext.players, icon: Users, color: "text-green-400" },
    { label: "Phòng chơi", value: TLStatContext.rooms, icon: Heart, color: "text-red-400" },
  ];

  return (
    <div className="flex items-center justify-between p-1 px-2 backdrop-blur border-b">
      {/* Game Logo and infomation */}
      <div className="flex items-center gap-2 lg:gap-4">
        <img src="favicon.webp" alt="Logo Xanh Chín" className="size-10 lg:size-12 rounded-30p" />

        <div>
          <h2 className="font-semibold text-sm lg:text-lg">Xanh Chín Project</h2>
          <p className="text-sm lg:text-md text-muted-foreground">
            Tiến Lên Miền Nam <span className="text-2xs lg:text-xs">v1.0.0-dev</span>
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="flex space-x-8 lg:space-x-16 border-x px-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-0.5">
            <div className="text-2xs lg:text-xs text-muted-foreground text-center">{stat.label}</div>

            <div className="flex items-center gap-2">
              <stat.icon className={`size-3 lg:size-4 ${stat.color}`} />
              <div className="text-sm lg:text-lg font-semibold">{FormatNumber(stat.value)}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Button and ui */}
      <div className="flex items-center gap-2">
        {/* Network status */}
        <div className="p-2 lg:p-3 hover:bg-foreground/20 rounded-30p transition-all">
          {IsOnlineContext ? (
            <Wifi className="size-6 text-green-400" />
          ) : (
            <WifiOff className="size-6 text-red-400" />
          )}
        </div>

        {/* Volume mute control */}
        <button
          aria-label="mute-toggle"
          className="p-2 lg:p-3 hover:bg-foreground/20 rounded-30p transition-all"
          onClick={() => SoundContext.toggleMute()}>
          {SoundContext.isMuted || SoundContext.volume < 0.2 ? (
            <VolumeX className="size-6 text-muted-foreground" />
          ) : (
            <Volume2 className="size-6" />
          )}
        </button>

        {/* Notification */}
        <button className="relative p-2 lg:p-3 hover:bg-foreground/20 rounded-30p transition-all">
          <Bell className="size-6" />
          {true && (
            <div className="absolute -top-1 -right-1 w-4 h-4 lg:w-5 lg:h-5 bg-red-500 rounded-md flex items-center justify-center text-[9px] lg:text-xs text-white font-bold">
              9+
            </div>
          )}
        </button>

        {/* Setting */}
        <button
          aria-label="setting-toggle"
          className="p-2 lg:p-3 hover:bg-foreground/20 rounded-30p transition-all"
          onClick={() => SettingContext.openDialog()}>
          <Settings className="size-6" />
        </button>
      </div>
    </div>
  );
}

// User Profile Card Component
function UserProfileCard() {
  return (
    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-2xl">
      <div className="flex items-start space-x-4 h-full">
        <div className="flex-1">
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white/50 shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="grid">
              <div className="flex items-center space-x-2 mb-2">
                <h2 className="text-xl font-bold text-white drop-shadow-lg">Tên Người Dùng</h2>
                <Star className="w-5 h-5 text-yellow-400" />
              </div>

              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center space-x-1">
                  <Crown className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm text-white/80">Cấp 15</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Flame className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-white/80">7 ngày</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Trophy className="w-4 h-4 text-purple-400" />
                  <span className="text-sm text-white/80">1,234 điểm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-white/60">
              <span>XP: 2,580/10,000</span>
              <span>7,420 XP nữa</span>
            </div>
            <div className="relative w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 h-3 rounded-full transition-all duration-1000 relative overflow-hidden"
                style={{ width: "26%" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-transparent to-white/30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Event Icons Component
export function EventIcons() {
  const events = [
    {
      icon: Crown,
      color: "text-yellow-400",
      bg_color: "bg-yellow-400/20",
    },
    {
      icon: Diamond,
      color: "text-blue-400",
      bg_color: "bg-blue-400/20",
    },
    {
      icon: Coins,
      color: "text-green-400",
      bg_color: "bg-green-400/20",
    },
    {
      icon: Gift,
      color: "text-red-400",
      bg_color: "bg-red-400/20",
    },
  ];

  return (
    <div className="absolute">
      {events.map((event, index) => (
        <div key={index} className={`p-2 m-2 rounded-xl border border-white/20 ${event.bg_color} hover:scale-105`}>
          <event.icon className={`w-7 h-7 ${event.color}`} />
        </div>
      ))}
    </div>
  );
}

// Currency Panel Component
function CurrencyPanel() {
  return (
    <div className="absolute m-4 top-14 right-0 flex gap-4">
      {/* Gold */}
      <div className="group relative">
        <div className="flex p-3 gap-3 items-center bg-gradient-to-r from-yellow-500/30 to-orange-600/30 backdrop-blur-xl text-yellow-200 rounded-2xl border border-yellow-400/40 hover:border-yellow-400/60 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg">
          <Coins className="w-6 h-6" />
          <span className="font-semibold w-20 flex-1">125,000</span>
          <Plus className="w-6 h-6" />
        </div>
      </div>

      {/* Diamond */}
      <div className="group relative">
        <div className="flex p-3 gap-3 items-center bg-gradient-to-r from-blue-500/30 to-cyan-600/30 backdrop-blur-xl text-blue-200 rounded-2xl border border-blue-400/40 hover:border-blue-400/60 transition-all duration-300 cursor-pointer hover:scale-105 shadow-lg">
          <Diamond className="w-6 h-6" />
          <span className="font-semibold w-20 flex-1">2,580</span>
          <Plus className="w-6 h-6" />
        </div>
      </div>

      <button className="group relative p-3 hover:bg-white/20 rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-110 shadow-lg flex-1">
        <ShoppingCart className="w-6 h-6 text-white group-hover:text-yellow-300 transition-colors mx-auto" />
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
          2
        </div>
      </button>
    </div>
  );
}

// Game Mode Panel Component
function GameModePanel() {
  const gameModes = [
    {
      title: "Chơi Ngay",
      gradient: "from-pink-500 to-purple-600",
      icon: Zap,
      popular: true,
    },
    {
      title: "Nhất Ăn Tất",
      gradient: "from-orange-500 to-red-600",
      icon: Sword,
      popular: false,
    },
    {
      title: "Đếm Lá",
      gradient: "from-blue-500 to-cyan-600",
      icon: BarChart3,
      popular: false,
    },
  ];

  return (
    <div className="absolute bottom-0 right-0 w-3/5 h-2/3 p-8">
      <div className="w-4/5 h-full rounded-lg shadow-sm p-4 flex flex-col gap-6">
        {gameModes.map((mode, index) => (
          <div
            key={index}
            className={`group relative p-4 bg-gradient-to-r ${mode.gradient} text-white rounded-3xl hover:scale-105 transition-all duration-300 shadow-2xl transform overflow-hidden`}>
            {mode.popular && (
              <div className="absolute top-3 right-12 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                PHỔ BIẾN
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

            <div className="relative flex items-center justify-between h-full">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                  <mode.icon className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-xl">{mode.title}</div>
                </div>
              </div>

              <div className="w-3 h-8 bg-white/30 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main Homepage Component
export default function Homepage() {
  return (
    <div
      className="w-screen h-screen relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/background/gambling.webp')` }}>
      <TopNavigationBar />

      <div className="absolute m-4 top-14 left-0">
        <UserProfileCard />
      </div>

      <CurrencyPanel />
      <GameModePanel />
    </div>
  );
}
