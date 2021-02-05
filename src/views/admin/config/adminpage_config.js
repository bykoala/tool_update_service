
import { LinkOutlined, PieChartOutlined, DesktopOutlined, MessageOutlined, AppstoreOutlined,HomeOutlined,SendOutlined } from '@ant-design/icons';

export const admin_nav_config = [
    {
        key: "adminpage",
        title: "",
        label: "主页",
        path: "/",
        icon: <HomeOutlined />,
        exact: true,
        items: false,
    },
    {
        key: "auto",
        title: "",
        label: "自动化测试平台",
        path: "/autoTestPlan",
        // disabled: true,
        icon: <DesktopOutlined />,
        items: false,
    },
    {
        key: "release",
        title: "",
        label: "发布平台",
        path: "/admin/release",
        icon: <AppstoreOutlined />,
        items: false,
    },
    {
        key: "download",
        title: "",
        label: "工具下载",
        path: "/updatelist",
        icon: <LinkOutlined />,
        items: false,
    },
    {
        key: "other",
        title: "其他",
        label: "",
        path: "/other",
        icon: <PieChartOutlined />,
        group: [
            {
                key: "",
                title: "关于我",
            },
            // {
            //     key: "",
            //     title: "Item 2",
            // },
        ],
        items: [
            [
                {
                    parent: "other",
                    key: "setting:1",
                    title: "",
                    label: "联系我",
                    path: "/ContactMe",
                    icon: <MessageOutlined />,
                    items: false,
                },
            ],
            // [
            //     {
            //         parent: "other",
            //         key: "setting:2",
            //         title: "",
            //         label: "Option 1",
            //         path: "",
            //         icon: "",
            //         items: false,
            //     },
            //     {
            //         parent: "other",
            //         key: "setting:3",
            //         title: "",
            //         label: "Option 2",
            //         path: "",
            //         icon: "",
            //         items: false,
            //     },
            // ],
        ]
    },
    {
        key: "tongzhi",
        title: "",
        label:
            (<a href="http://tongzhi.wang" target="_blank" rel="noopener noreferrer">
                历程
            </a>),
        path: "",
        icon: <SendOutlined />,
        items: false,
    },
];