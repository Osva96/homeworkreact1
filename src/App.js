import logo from './logo.svg';
import './App.css';
import React from 'react';

// Imported styles of mui Material.
import { styled } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import { red } from '@mui/material/colors';
import { indigo } from '@mui/material/colors';

// Imported components of mui Material.
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Modal from '@mui/material/Modal';

// Construction of the component Item. Is used inside the Grid.
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// Spacing reference between components when its called.
const theme = {
  spacing: 12
}

// * Personalized buttons with diferent color.
// Teal Button
const ColorButtonV1 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(teal[500]),
  backgroundColor: teal[500],
  '&:hover': {
    backgroundColor: teal[700],
  },
}));

// Red Button
const ColorButtonV2 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  '&:hover': {
    backgroundColor: red[700],
  },
}));

// Indigo Button
const ColorButtonV3 = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[500]),
  backgroundColor: indigo[500],
  '&:hover': {
    backgroundColor: indigo[700],
  },
}));

// * Personal Image List
const itemData = [
  {
    img: 'https://lite-images-i.scdn.co/image/ab67616d0000b273a3e829a04b1fa282a69e4694',
    title: 'Tool',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://cdns-images.dzcdn.net/images/artist/e5a37883a9cc9b612b8e402e153bd8e9/500x500.jpg',
    title: 'Pelican',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://2.bp.blogspot.com/-FTHEbKvfFsI/WbDa-iOby1I/AAAAAAAANHE/JfVLdcR77mAAa9qijus0vaKWT6oTMpmGACLcBGAs/s1600/55757.jpg',
    title: 'Immolation',
    rows: 2,
    cols: 2
  },
  {
    img: 'https://www.spirit-of-metal.com/cover.php?id_album=1082',
    title: 'Morbid Angel',
    cols: 2,
  },
  {
    img: 'https://lastfm.freetls.fastly.net/i/u/500x500/d513085bb3d8441c9078a18208565f11.jpg',
    title: 'Morbid Angel',
    cols: 2,
  },
];

// * Function of the ImageList
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

// * Function of the TabPanel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// * Constant where is describe the style of the Modal
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

function App() {

  // * Tabs const
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // * Modal const
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App-body">
      <CssBaseline />
      {/* Container */}
      <Container maxWidth='lg' sx={{ p: 3 }}>

        {/* Main Grid containing all the other components */}
        <Grid container spacing={2}>
          
          {/* Presentation or title Grid */}
          <Grid item xs={12} container justifyContent="center" className="App-presentation">
              <h3>
                PRESENTATION
              </h3>
          </Grid>

          {/* First level Grid */}
          <Grid container spacing={ 3 } sx={{ pt: 4}} justifyContent="space-evenly">

            {/* Column left of the main Grid */}
            <Grid item xs={4}>

              {/* Vertical Grid to put main data */}
              <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{p: 3}} className="Main-left-container">
                <Grid item xs={12}>
                    <Avatar alt="Personal Photo" sx={{width: 192, height: 192}} src="https://www.rockaxis.com/img/newsList/7997436.jpg" />
                </Grid>
                <Grid item xs={12} container justifyContent="flex-start">
                  <strong>Name: </strong> Osvaldo Villalobos Pérez.
                </Grid>
                <Grid item xs={12} container justifyContent="flex-start">
                  <strong>Age: </strong> 24 years.
                </Grid>
                <Grid item xs={12} container justifyContent="flex-start">
                  <strong>College: </strong> ITSUR.
                </Grid>
                <Grid item xs={12} container justifyContent="flex-start">
                  <strong>Birtday: </strong> December 10, 1996.
                </Grid>
                <Grid item xs={12} container justifyContent="flex-start">
                  <strong>Address: </strong> Moroleón, Gto. México.
                </Grid>
              </Grid>

            </Grid>

            {/* Column right of the main Grid */}
            <Grid item xs={7}>

              {/* Main container of the right */}
              <Grid container spacing={2}>

                {/* Grid container MOVIES */}
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                      Favorite Movies
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{maxWidth: 250, height: 310}}>
                      <CardMedia component="img" height="140" image="https://m.media-amazon.com/images/I/51NiGlapXlL._AC_.jpg" alt="Lost Image" />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          The Shawshank Redemption
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Drama, Crime
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn more...</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{maxWidth: 250, height: 310}}>
                      <CardMedia component="img" height="140" image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7O5x0XZTrKeE9nY1wAYbtGkZCQG.jpg" alt="Lost Image" />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          RAN
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Action, War, Drama, Epic
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn more...</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                  <Grid item xs={4}>
                    <Card sx={{maxWidth: 250, height: 310}}>
                      <CardMedia component="img" height="140" image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3ddHhfMlZHZCefHDeaP8FzSoH4Y.jpg" alt="Lost Image" />
                      <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                          American Psycho
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Thriller, Drama, Crime, Horror
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn more...</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                </Grid>

                {/* Grid container MUSIC */}
                <Grid container spacing={2} sx={{ pt:3 }}>

                  <Grid item xs={12}>
                      <Typography variant="h5" component="div">
                        Favorite Music
                      </Typography>
                  </Grid>

                  <Grid container spacing={2} sx={{ pl:2 }}>
                    <Grid item sx={12}>
                      <ImageList sx={{width:687, height:450}} variant="quilted" cols={4} rowHeight={121}>
                        {itemData.map((item) => (
                          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                            <img {...srcset(item.img, 121, item.rows, item.cols)} alt={item.title} loading="lazy" />
                          </ImageListItem>
                        ))}
                      </ImageList>
                    </Grid>
                  </Grid>

                </Grid>

                {/* Grid container VIDEO GAMES */}
                <Grid container spacing={2} sx={{pt:3}}>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                      Videogames
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                        <Typography>
                          Bloodborne
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container justifyContent="center" alignItems="center">
                          <Grid item sx={12}>
                            <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1rba.png" />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                        <Typography>
                          God of War
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container justifyContent="center" alignItems="center">
                          <Grid item sx={12}>
                            <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co1tmu.png" />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                    <Accordion>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header">
                        <Typography>
                          Ninja Gaiden
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container justifyContent="center" alignItems="center">
                          <Grid item sx={12}>
                            <img src="https://images.igdb.com/igdb/image/upload/t_cover_big/co2gre.png" />
                          </Grid>
                        </Grid>
                      </AccordionDetails>
                    </Accordion>
                  </Grid>
                </Grid>

                {/* Grid container BOOKS */}
                <Grid container spacing={2} rowSpacing={5} sx={{pt:3}}>

                  {/* Title Books */}
                  <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                      Favorite Books
                    </Typography>
                  </Grid>

                  {/* Buttons to show Books */}
                  <Grid item xs={12}>
                    
                    <Grid container spacing={3} direction="row" justifyContent="space-evenly" alignItems="center" sx={{ pl: 2 }}>
                      <Button variant="contained" className="btnPersonalized">
                        Pedro Páramo
                      </Button>
                      <ColorButtonV1 variant="contained">
                        Metro 2033
                      </ColorButtonV1>
                    </Grid>

                  </Grid>

                  <Grid item xs={12}>
                    
                    <Grid container spacing={3} direction="row" justifyContent="space-evenly" alignItems="center" sx={{ pl: 2 }}>
                      <ColorButtonV2 variant="contained">
                        Las venas abiertas de América Latina
                      </ColorButtonV2>
                      <ColorButtonV3 variant="contained">
                        Las venas abiertas de América Latina
                      </ColorButtonV3>
                    </Grid>
                    
                  </Grid>

                </Grid>

                {/* Grid container SPORTS */}
                <Grid container spacing={2} sx={{pt:3}}>

                  <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                      Favorite Sports
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Box sx={{ width: '100%' }}>
                      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                          <Tab label="Correr" {...a11yProps(0)} />
                          <Tab label="Ciclismo" {...a11yProps(1)} />
                        </Tabs>
                      </Box>
                      <TabPanel value={value} index={0}>
                        <Grid container justifyContent="center" alignItems="center">
                          <Grid item xs={12}>
                            <img src="https://icdn.dtcn.com/image/digitaltrends_es/mejores-tenis-para-correr-2-500x500.jpg" />
                          </Grid>
                        </Grid>
                      </TabPanel>
                      <TabPanel value={value} index={1}>
                        <Grid container justifyContent="center" alignItems="center">
                          <Grid item xs={12}>
                            <img src="https://www.zacatecas.gob.mx/wp-content/uploads/2020/03/Gran-exito-primera-Ruta-Dominical-en-Zacatecas-0-500x500.jpg" />
                          </Grid>
                        </Grid>
                      </TabPanel>
                    </Box>
                  </Grid>
                  
                </Grid>

                {/* Grid container HOBBIES */}
                <Grid container spacing={2} sx={{pt:3}}>
                  <Grid item xs={12}>
                    <Typography variant="h5" component="div">
                      Hobbie
                    </Typography>
                  </Grid>

                  <Grid item xs={12}>
                    <Button onClick={handleOpen} variant="contained">Open modal</Button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                      </Box>
                    </Modal>
                  </Grid>
                </Grid>

              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Container>
    </div>
  );
}

export default App;
