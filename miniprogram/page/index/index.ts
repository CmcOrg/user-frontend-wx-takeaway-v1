import {DrawMarquee} from "tdesign-miniprogram/notice-bar/type"
import {UserSelfInfoVO} from "../../api/none/UserSelfController";
import {GetUserInfo} from "../../util/UserUtil";

const app = getApp<IAppOption>()

interface IIndex {
    marquee: DrawMarquee
    userSelfInfoVO: UserSelfInfoVO,
}

Page({
    data: {
        statusBarHeight: app.globalData.statusBarHeight + 'px',
        menuButtonHeight: app.globalData.menuButtonHeight + 'px',
        menuButtonMarginRight: app.globalData.menuButtonMarginRight,
        marquee: {
            speed: 10
        },
        popupVisible: false,
        userSelfInfoVO: {} as UserSelfInfoVO, // 登录的用户信息
    } as IIndex,
    onLoad() {
        // 获取：用户基本信息
        GetUserInfo().then(res => {
            this.setData({
                userSelfInfoVO: res
            })
        })
    },
    accountClick() {
    },
    cardClick() {
    },
    openPopup() {
        this.setData({
            popupVisible: true
        })
    },
    onPopupVisibleChange(e: { detail: { visible: boolean; }; }) {
        this.setData({
            popupVisible: e.detail.visible,
        });
    },
})
