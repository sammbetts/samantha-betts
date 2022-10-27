import React from 'react';
import { Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Health } from '../components/Health';
import { SideBar, SideBarItem } from '../components/SideBar';
import { Modal } from '../components/Modal';
import { useGetAllEntries, useGetHealth } from '../api';
import { Items } from '../types';

const useStyles = makeStyles(() => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    display: 'flex',
    width: '850px',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    width: '70%',
    textAlign: 'center',
  },
  emoji: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export const HomePage: React.FC = () => {
  const classes = useStyles();
  const getHealth = useGetHealth();
  const getAllItems = useGetAllEntries();

  const [health, setHealth] = React.useState<boolean>(false);
  const [items, setItems] = React.useState([]);
  const [selectedItem, setSelectedItem] = React.useState<Items | null>(null);

  React.useEffect(() => {
    getAllItems.then((data) => setItems(data));
    getHealth.then(({ healthy }) => setHealth(healthy));
  }, []);

  const sideBarItems = items?.map((item: Items) => ({
    onClick: () => setSelectedItem(item),
    component: <SideBarItem title={item.id} description={item.name || ''} />,
  }));

  return (
    <>
      <Box className={classes.container}>
        <Typography variant="h2" className={classes.title}>
         Samantha Betts
        </Typography>
        <br></br>
        <Box className={classes.content}>
          <Health isHealthy={health} />
        </Box>
      </Box>
      <SideBar width={250} height="calc(100vh - 112px)" items={sideBarItems} />
      <Modal
        isOpen={!!selectedItem}
        handleClose={() => setSelectedItem(null)}
      >
        {selectedItem && (
          <Box key={selectedItem.id}>
            <Box>
              <Typography variant="h5">
                {selectedItem.name}'s emoji is:
              </Typography>
              <Box className={classes.emoji}>
                <Typography variant="h3">{selectedItem.emoji}</Typography>
              </Box>
            </Box>
          </Box>
        )}
      </Modal>
    </>
  );
};
