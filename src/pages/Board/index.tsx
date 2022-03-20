import React, {useCallback, useEffect, useMemo, useState} from "react";
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
import KanbanHeader from "./KanbanHeader";
import {headerMock} from "../mock";


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

    // contexts: projects ... , modals: (project desc/edit, group desc/edit, task desc/edit)
    const [currentHeaderContext, setCurrentHeaderContext] = useState(headerMock[0])
    // modes: list, table
    const [panelMode, setPanelMode] = useState('list')


    const changePanelMode = useCallback(() => {
        setPanelMode(prev => prev === 'list' ? 'table' : 'list')
    }, [])

    const changeActivePanel = useCallback((panelMode, currentHeaderContext) => {
        //setCurrentHeaderContext(prev => prev === 'list' ? 'table' : 'list')
    }, [])


    const changeCurrentHeaderContext = useCallback((context) => {
        setCurrentHeaderContext(context)
    }, [])



    useEffect(() => {
        changeActivePanel(panelMode, currentHeaderContext)
    }, [panelMode, currentHeaderContext])


    return (

        <SplitLayout
            style={{ justifyContent: "center" }}
            header={hasHeader && <PanelHeader separator={false} />}
        >
            <KanbanHeader
                changePanelMode={changePanelMode}
                changeActivePanel={changeActivePanel}
                currentHeaderContext={currentHeaderContext}
                changeCurrentHeaderContext={changeCurrentHeaderContext}
            />
            <div style={{height:170}} />
            <Board />
        </SplitLayout>

    );
}
export default BoardIndex;
