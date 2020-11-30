import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/lab/Rating'
import FavoriteIcon from '@material-ui/icons/Favorite'

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
  sizeLarge: {
    fontSize: '3.5em',
  },
})(Rating)

export default function CustomizedRatings() {
  return (
    <div>
      <StyledRating
        name='customized-color'
        defaultValue={0}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        precision={0.5}
        icon={<FavoriteIcon fontSize='inherit' />}
        size='large'
        className='rate'
      />
    </div>
  )
}
