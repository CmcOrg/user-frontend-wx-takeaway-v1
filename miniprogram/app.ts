import {UserSelfInfoVO} from "./api/none/UserSelfController";
import UpdateManager from "./util/UpdateManager";

App<IAppOption>({
    globalData: {
        statusBarHeight: 0,
        menuButtonHeight: 0,
        menuButtonWidth: 0,
        menuButtonMarginTop: 0,
        menuButtonMarginRight: 0,
        userSelfInfoVO: {} as UserSelfInfoVO, // 登录的用户信息
    },
    onLaunch() {
        const menuButton = wx.getMenuButtonBoundingClientRect();
        const that = this
        wx.getSystemInfo({
            success: (res) => {
                that.globalData.statusBarHeight = res.statusBarHeight
                that.globalData.menuButtonMarginTop = menuButton.top - res.statusBarHeight
                that.globalData.menuButtonMarginRight = res.windowWidth - menuButton.right
                that.globalData.menuButtonWidth = menuButton.width + that.globalData.menuButtonMarginRight
                that.globalData.menuButtonHeight = menuButton.height + (that.globalData.menuButtonMarginTop * 2);
            },
        })
        
        UpdateManager();
    },

})
