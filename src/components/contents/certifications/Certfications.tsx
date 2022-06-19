import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

type CertificateObject = {
  id: number;
  name: string;
  photo: string;
  link: string;
};

const Certfications = ({ certificate }: { certificate: CertificateObject }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea
        onClick={() =>
          certificate.link !== "#"
            ? window.open(certificate.link, "_blank")
            : null
        }
      >
        <CardMedia
          component="img"
          height="140"
          image={certificate.photo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {certificate.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Certfications;
