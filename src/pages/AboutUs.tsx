import { FC } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import { keyframes } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TeamMember, team as teamData } from "../data/home/TeamMembers"; // Import the interface and data

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AboutUs: FC = () => {
  const theme = useTheme();
  const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      sx={{
      
        
        flexGrow: "1",
        display: "flex",
        justifyContent: "center", // Alinha o conteúdo horizontalmente ao centro
        alignItems: "center", // Alinha o conteúdo verticalmente ao centro (opcional, dependendo do layout desejado)
        padding: theme.spacing(4, 0), // Ajusta o padding vertical e remove o horizontal para o container principal
        background: `linear-gradient(135deg,rgb(255, 255, 255) 0%,rgb(180, 226, 203) 100%)`,
        backgroundSize: "200% 200%",
        animation: `${gradientAnimation} 15s ease infinite`,
      }}
    >
      <Box
                maxWidth="md"
          mx="auto"
        
      >
        {teamData.map(({ name, img, bio }: TeamMember, index) => (
          <Box
            key={name}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: theme.spacing(2),
              marginBottom: theme.spacing(3), // Aumentei um pouco o margin bottom
              animation: `${fadeInUp} 0.6s ease both`,
              flexDirection: index % 2 !== 0 ? "row-reverse" : "row",
              [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                textAlign: 'center',
                alignItems: 'center', // Centraliza os itens no mobile
              },
            }}
          >
            <Avatar
              alt={name}
              src={img}
              sx={{
                width: 96,
                height: 96,
                borderRadius: "50%",
                flexShrink: 0,
                boxShadow: theme.shadows[2],
              }}
            />
            <Box>
              <Typography variant="h6" component="h3" sx={{ mb: 0.5 }}>
                {name}
              </Typography>
              <Typography variant="body2" sx={{ color: "#666", fontWeight: 700, lineHeight: 1.4 }}>
                {bio}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AboutUs;