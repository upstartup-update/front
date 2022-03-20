import React, {useCallback, useEffect, useMemo, useState} from "react";
import { Observer } from "mobx-react-lite";
import {
    Cell,
    Div, List, Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderButton,
    PanelHeaderContent,
    PanelHeaderContext, Separator,
    SplitLayout, Switch, usePlatform, VKCOM
} from "@vkontakte/vkui";
import {
    Icon16Dropdown,
    Icon24Done,
    Icon28AddOutline,
    Icon28ListHandAlt,
    Icon28Rectangle2Outline
} from "@vkontakte/icons";
import Board from "./Board";
import {headerMock} from "../mock";


function KanbanHeader({ changePanelMode, changeActivePanel, currentHeaderContext, changeCurrentHeaderContext }: any) {
    const platform = usePlatform();
    const hasHeader = platform !== VKCOM;
    const [contextOpened, setContextOpened] = useState(false)



    const toggleContext: any = (headerContext: any) => {
        setContextOpened(prev => !prev);
        (typeof headerContext === 'string') && changeCurrentHeaderContext(headerContext.toString())
    }



    return (
        <>
            <PanelHeader
                left={<PanelHeaderBack />}
                right={
                    <PanelHeaderButton>
                        <Icon28AddOutline />
                    </PanelHeaderButton>
                }
            >
                <PanelHeaderContent
                    aside={
                        <Icon16Dropdown
                            style={{
                                transform: `rotate(${
                                    contextOpened ? "180deg" : "0"
                                })`,
                            }}
                        />
                    }
                    onClick={toggleContext}
                >
                    {currentHeaderContext}
                </PanelHeaderContent>
            </PanelHeader>
            <PanelHeaderContext
                opened={contextOpened}
                onClose={toggleContext}
            >
                <List>
                    <Cell
                        after={
                            <Switch
                                onChange={changePanelMode}
                            />
                        }
                    >
                        Режим таблицы
                    </Cell>
                    <Separator style={{ margin: "12px 0" }} />
                    {
                        headerMock.map((headerContext, id) => (
                            <Cell
                                after={<Icon24Done fill="var(--accent)" />}
                                key={id}
                                onClick={() => toggleContext(headerContext)}
                            >
                                {headerContext}
                            </Cell>
                        ))
                    }
                </List>
            </PanelHeaderContext>
        </>

    );
}
export default KanbanHeader;
