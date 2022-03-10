import React, {useMemo, useState} from "react";
import { Observer } from "mobx-react-lite";
import {
    Cell,
    Div, List, Panel,
    PanelHeader,
    PanelHeaderBack,
    PanelHeaderButton,
    PanelHeaderContent,
    PanelHeaderContext,
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


function Header() {
    const platform = usePlatform();
    const hasHeader = platform !== VKCOM;
    const [contextOpened, setContextOpened] = useState(false)
    const [mode, setMode] = useState('list')
    const [currentHeaderContext, setCurrentHeaderContext] = useState(headerMock[0])

    const toggleContext = () => {
        setContextOpened(prev => !prev);
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
                        after={<Switch aria-label="Комментарии к записям" />}
                    >
                        Режим таблицы
                    </Cell>
                    {
                        headerMock.map((headerContext, id) => (
                            <Cell
                                after={<Icon24Done fill="var(--accent)" />}
                                key={id}
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
export default Header;
