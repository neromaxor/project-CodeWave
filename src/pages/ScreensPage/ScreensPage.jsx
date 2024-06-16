import { useState, useEffect, useSelector } from 'react';
import MainDashboard from '../../components/MainDashboard/MainDashboard';
import HeaderDashboard from '../../components/HeaderDashboard/HeaderDashboard';


import css from './ScreensPage.module.css';

export default function ScreensPage() {
    const [hasBoards, setHasBoards] = useState(true);
   

    useEffect(() => {
        const checkBoards = async () => {
            // Імітація перевірки з сервера
            const boards = await getBoards();
            setHasBoards(boards.length > 0);
        };

        checkBoards();
    }, []);

    return (
        <div className={css.screensPage}>
            <HeaderDashboard boardName="Current Board" />
            {hasBoards ? (
                <MainDashboard />
            ) : (
                <p>
                    Before starting your project, it is essential to create a board to visualize and track all the necessary tasks and milestones. This board serves as a powerful tool to organize the workflow and ensure effective collaboration among team members.
                </p>
            )}
        </div>
    );
}
