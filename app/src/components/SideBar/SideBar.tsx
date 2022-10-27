import React, { ReactElement } from 'react';
import { List, Box, ListItem, Divider, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';

type SideBarItem = {
  component: ReactElement;
  onClick: () => void;
};

type Props = {
  items: SideBarItem[];
  selectedItemIndex?: number;
  width: any;
  height: any;
  paddingBottom?: React.CSSProperties['paddingBottom'];
};

const useStyles = makeStyles(() => ({
  toggleButton: {
    height: '65px',
    borderTopRightRadius: '10rem',
    borderBottomRightRadius: '9rem',
    width: '10px',
    position: 'absolute',
    zIndex: 1,
    borderLeft: 0,
    borderColor: 'transparent',
    backgroundColor: '#F22DAE',
  },
  sideBar: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 0,
    borderColor: 'inherit',
    transition: '0.8s ease',
    position: 'fixed',
    left: 0,
    bottom: 0,
    top: '5.6rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
  },
  listItems: {
    overflowY: 'auto',
    height: '100%',
    width: '100%',
    position: 'fixed',
  },
}));

export const SideBar: React.FC<Props> = (props: Props) => {
  const { items, selectedItemIndex, width, height } = props;
  const classes = useStyles();

  const [xPosition, setX] = React.useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

  React.useEffect(() => {
    setX(0);
  }, []);

  return (
    <React.Fragment>
      <Paper
        className={classes.sideBar}
        elevation={4}
        id='siderbar'
        data-test-id='sidebar'
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height,
        }}
      >
        <button
          id='sidebar-button'
          data-test-id='sidebar-button'
          onClick={() => toggleMenu()}
          className={classes.toggleButton}
          style={{
            transform: `translate(${width}px, 9vh)`,
          }}
        />
        <Box>
          <List
            className={classes.listItems}
            sx={{
              paddingBottom: props.paddingBottom ?? 0,
            }}
          >
            {items.map(({ component, onClick }, index) => (
              <div key={`sidebar-item-${index}`}>
                <ListItem
                  button
                  data-test-id={`sidebar-item-${index}`}
                  onClick={onClick}
                  selected={selectedItemIndex === index}
                >
                  {component}
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </Paper>
    </React.Fragment>
  );
};
