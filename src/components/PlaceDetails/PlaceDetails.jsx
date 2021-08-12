import React from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';

import useStyles from './styles'

const PlaceDetails = ({ place, selected, refProp }) => {

    const classes = useStyles();

    if(selected) refProp?.current?.scrollIntoView({ behaviour: "smooth", block: "start"})

    return (
        <Card elevation={6} variant="outlined">
            <CardMedia 
                style={{ height: 350 }}
                image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" className={classes.fonts}>{place.name}</Typography>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" className={classes.fonts1}>Price</Typography>
                    <Typography gutterBottom variant="subtitle1" className={classes.fonts1}>{place.price_level}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" className={classes.fonts1}>Ranking</Typography>
                    <Typography gutterBottom variant="subtitle1" className={classes.fonts1}>{place.ranking}</Typography>
                </Box>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="subtitle1" className={classes.fonts1}>Rating</Typography>
                    <Typography gutterBottom variant="subtitle1" className={classes.fonts1}>{place.rating}</Typography>
                </Box>

                {place?.awards?.map((award) => (
                    <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant="subtitle2" color="textSecondary" className={classes.fonts2}>{award.display_name}</Typography>
                    </Box>
                ))}

                {place?.cuisine?.map(({ name }) => (
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}

                {place?.address && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon /> {place.address}
                    </Typography>
                )}
                <br />
                {place?.phone && (
                    <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {place.phone}
                    </Typography>
                )}

                <CardActions>
                    <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                        Trip Advisor
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                        Website
                    </Button>
                    <Button size="small" color="primary" onClick={() => window.open(place.write_review, '_blank')}>
                        Write your reviews
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default PlaceDetails;