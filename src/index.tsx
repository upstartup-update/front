import React, {useState} from "react";
import ReactDOM from "react-dom";
import {
    AdaptivityProvider,
    ConfigProvider,
    useAdaptivity,
    AppRoot,
    usePlatform,
    VKCOM,
    ViewWidth,
    SplitLayout,
    PanelHeader,
    SplitCol,
    Panel,
    Group,
    Cell,
    TabbarItem,
    Tabbar,
    Epic,
    View,
    PanelHeaderBack, Placeholder, withAdaptivity,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import BoardIndex from "./pages/Board";
import {Icon28NewsfeedOutline, Icon28ServicesOutline, Icon56NewsfeedOutline} from "@vkontakte/icons";




const App = withAdaptivity(
    ({ viewWidth }) => {
        const platform = usePlatform();
        const [activeStory, setActiveStory] = React.useState("feed");
        const onStoryChange = (e: any) => setActiveStory(e.currentTarget.dataset.story);
        const isDesktop = false;
        //(viewWidth >= ViewWidth.TABLET)
        const hasHeader = platform !== VKCOM;


    return (
        <SplitLayout
            header={hasHeader && <PanelHeader separator={false} />}
            style={{ justifyContent: "center" }}
        >
            {isDesktop && (
                <SplitCol fixed width={280} maxWidth={280}>
                    <Panel>
                        {hasHeader && <PanelHeader />}
                        <Group>
                            <Cell
                                disabled={activeStory === "feed"}
                                style={
                                    activeStory === "feed"
                                        ? {
                                            backgroundColor: "var(--button_secondary_background)",
                                            borderRadius: 8,
                                        }
                                        : {}
                                }
                                data-story="feed"
                                onClick={onStoryChange}
                                before={<Icon28NewsfeedOutline />}
                            >
                                feed
                            </Cell>
                            <Cell
                                disabled={activeStory === "services"}
                                style={
                                    activeStory === "services"
                                        ? {
                                            backgroundColor: "var(--button_secondary_background)",
                                            borderRadius: 8,
                                        }
                                        : {}
                                }
                                data-story="services"
                                onClick={onStoryChange}
                                before={<Icon28ServicesOutline />}
                            >
                                services
                            </Cell>
                        </Group>
                    </Panel>
                </SplitCol>
            )}

            <SplitCol
                animate={!isDesktop}
                spaced={isDesktop}
                width={isDesktop ? "560px" : "100%"}
                maxWidth={isDesktop ? "560px" : "100%"}
            >
                <Epic
                    activeStory={activeStory}
                    tabbar={
                        !isDesktop && (
                            <Tabbar>
                                <TabbarItem
                                    onClick={onStoryChange}
                                    selected={activeStory === "feed"}
                                    data-story="feed"
                                    text="Кружки"
                                >
                                    <Icon28NewsfeedOutline />
                                </TabbarItem>
                                <TabbarItem
                                    onClick={onStoryChange}
                                    selected={activeStory === "search"}
                                    data-story="search"
                                    text="Поиск"
                                >
                                    <Icon28NewsfeedOutline />
                                </TabbarItem>
                                <TabbarItem
                                    onClick={onStoryChange}
                                    selected={activeStory === "services"}
                                    data-story="services"
                                    text="Профиль"
                                >
                                    <Icon28ServicesOutline />
                                </TabbarItem>
                            </Tabbar>
                        )
                    }
                >
                    <View id="feed" activePanel="feed">
                        <Panel id="feed">
                            <BoardIndex />
                        </Panel>
                    </View>
                    <View id="search" activePanel="search">
                        <Panel id="search">
                            <PanelHeader>Поиск</PanelHeader>
                        </Panel>
                    </View>
                    <View id="services" activePanel="services">
                        <Panel id="services">
                            <PanelHeader>Профиль</PanelHeader>
                            ggggggggg
                        </Panel>
                    </View>
                </Epic>
            </SplitCol>
        </SplitLayout>
    );
    },
    {
        viewWidth: true,
    }
);

ReactDOM.render(
    <ConfigProvider>
        <AdaptivityProvider>
            <AppRoot>
                <App />
            </AppRoot>
        </AdaptivityProvider>
    </ConfigProvider>,
    document.getElementById("root"),
);