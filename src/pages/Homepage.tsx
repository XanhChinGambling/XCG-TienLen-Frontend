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

export default function Homepage() {
  return (
    <div className="w-full h-full relative">
      {/* Top Navigation Bar */}
      <div className="h-14 bg-black/20 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-6 relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            {/* TODO: Cài đặt logo thương hiệu */}
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg text-white">
                Xanh Chín Project - Tiến Lên Miền Nam
              </div>
              <div className="text-xs text-white/60">v0.1.0-dev</div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-8 gap-8">
          {[
            { label: "Người chơi", value: "1,234", icon: Users, color: "text-green-400" },
            { label: "Phòng chơi", value: "89", icon: Heart, color: "text-red-400" },
          ].map((stat, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg">
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <div className="text-sm text-white/60">{stat.label}</div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-3 gap-0.5">
          <button className="p-3 hover:bg-white/20  rounded-xl transition-all duration-300">
            {/* TODO: Change this */}
            {true ? (
              <Volume2 className="w-6 h-6 text-white" />
            ) : (
              <VolumeX className="w-6 h-6 text-white/60" />
            )}
          </button>

          <div className="flex p-3 items-center space-x-2 text-white/80">
            {/* TODO: Change this */}
            {true ? (
              <Wifi className="w-6 h-6 text-green-400" />
            ) : (
              <WifiOff className="w-6 h-6 text-red-400" />
            )}
            <span className="text-sm">{true ? "Online" : "Offline"}</span>
          </div>

          <button className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 relative">
            <Bell className="w-6 h-6 text-white" />
            {/* TODO: Change this */}
            {true && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold">
                9+
              </div>
            )}
          </button>

          <button className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 relative">
            <Settings className="w-6 h-6 text-white group-hover:text-blue-300 transition-colors mx-auto" />
          </button>
        </div>
      </div>

      <div className="absolute m-4 top-14 left-0">
        {/* User Profile Card */}
        <div className=" bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-2xl">
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
                    <h2 className="text-xl font-bold text-white drop-shadow-lg">
                      Tên Người Dùng
                    </h2>
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

        {/* Event Icons */}
        <div className="absolute">
          {[
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
          ].map((event, index) => (
            <div
              key={index}
              className={`p-2 m-2 rounded-xl border border-white/20 ${event.bg_color} hover:scale-105`}>
              <event.icon key={index} className={`w-7 h-7 ${event.color}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Currency Panel */}
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

      <div className="absolute bottom-0 right-0 w-3/5 h-2/3 p-8">
        <div className="w-4/5 h-full rounded-lg shadow-sm p-4 flex flex-col gap-6">
          {[
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
          ].map((mode, index) => (
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
    </div>
  );
}
