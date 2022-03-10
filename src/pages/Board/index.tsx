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
    SplitLayout, usePlatform, VKCOM
} from "@vkontakte/vkui";
import {
    Icon16Dropdown,
    Icon24Done,
    Icon28AddOutline,
    Icon28ListHandAlt,
    Icon28Rectangle2Outline
} from "@vkontakte/icons";
import Board from "./Board";
import Header from "./Header";


const mainHeaderContexts = [
    {
        id: 'list',
        title: 'Список',
        icon: <Icon28ListHandAlt />,
    },
    {
        id: 'table',
        title: 'Таблица',
        icon: <Icon28Rectangle2Outline />,
    },
]

function BoardIndex() {
    const platform = usePlatform();
    const hasHeader = platform !== VKCOM;
    const [contextOpened, setContextOpened] = useState(false)
    const [mode, setMode] = useState('list')
    const [currentHeaderContext, setCurrentHeaderContext] = useState(mainHeaderContexts[0])

    const toggleContext = () => {
        setContextOpened(prev => !prev);
    }

    return (

        <SplitLayout
            style={{ justifyContent: "center" }}
            header={hasHeader && <PanelHeader separator={false} />}
        >
            <Header/>
            <Board />
        </SplitLayout>

    );
}
export default BoardIndex;
