'use client'

import * as React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import getFormattedDate from '@/lib/getFormattedDate';
import { useTheme } from '@mui/material/styles';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  marginLeft: 'auto',
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type Props = {
  post: Meta & { image: string };
};

// 🌟 Styled Card for professional design
const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  borderRadius: '1rem',
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  overflow: 'hidden',
  backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#fff', // dark:bg-gray-950
  color: theme.palette.mode === 'dark' ? '#f1f5f9' : '#1f2937',         // dark:text-gray-100
  border: theme.palette.mode === 'dark' ? '1px solid #334155' : '1px solid #e5e7eb', // dark:border-gray-700
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.palette.mode === 'dark'
      ? '0 12px 24px rgba(255, 255, 255, 0.05)'
      : '0 12px 24px rgba(0, 0, 0, 0.12)',
  },
}));


// 🌟 Image Style — consistent size and cover
const StyledCardMedia = styled('img')({
  width: '100%',
  height: '200px',
  objectFit: 'cover',
});

export default function ListItem({ post }: Props) {
  const theme = useTheme();
  const { id, title, date, image } = post;
  const formattedDate = getFormattedDate(date);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: theme.palette.mode === 'dark' ? '#1e40af' : red[500] }}>
          {title[0]}
        </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Link href={`/posts/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {title}
          </Link>
        }
        subheader={formattedDate}
      />
      <StyledCardMedia
        src={`/images/${image}`}
        alt={title}
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
        }}
      />

      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Click to read more about <strong>{title}</strong>.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Preview:</Typography>
          <Typography paragraph>
            This post was published on {formattedDate}. Click the title above to view the full post.
          </Typography>
        </CardContent>
      </Collapse>
    </StyledCard>
  );
}
