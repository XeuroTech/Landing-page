import React, { useState } from "react";
import Frame from "../assets/homepic/Frame.jpg";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Box,
  Grid,
  Card,
  CardMedia,
  Typography,
  Paper,
  Stack,
  Button,
} from "@mui/material";

const AllTags = () => {
  const [value, setValue] = useState(0);
  const [visibleItems, setVisibleItems] = useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLoadMore = (e) => {
    e.preventDefault();
    setVisibleItems((prev) => prev + 6);
  };

  // Sample data for each category
  const categories = [
    {
      name: "All Tags",
      images: [
        {
          id: 1,
          title: "Mountain View",
          name: "Product Updates",
          date: "Nov 14, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 2,
          title: "Forest Trail",
          name: "Reflect Workflows",
          date: "Nov 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 3,
          title: "Ocean Waves",
          name: "Articles",
          date: "Sep 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 4,
          title: "Desert Sunset",
          name: "Toolshed Interviews",
          date: "Sep 12, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 5,
          title: "Waterfall",
          name: "Articles",
          date: "Sep 8, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 6,
          title: "Autumn Leaves",
          name: "Product Updates",
          date: "Sep 5, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 7,
          title: "Note-taking Tips",
          name: "Reflect Workflows",
          date: "Nov 14, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 8,
          title: "Organization Guide",
          name: "Reflect Workflows",
          date: "Nov 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 9,
          title: "Team Collaboration",
          name: "Reflect Workflows",
          date: "Oct 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 10,
          title: "Keyboard Shortcuts",
          name: "Reflect Workflows",
          date: "Oct 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 11,
          title: "Templates",
          name: "Reflect Workflows",
          date: "Sep 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 12,
          title: "Advanced Features",
          name: "Reflect Workflows",
          date: "Sep 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
      ],
    },
    {
      name: "Products Update",
      images: [
        {
          id: 1,
          title: "New Feature Launch",
          name: "Product Updates",
          date: "Nov 14, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 2,
          title: "Mobile App Update",
          name: "Product Updates",
          date: "Nov 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 3,
          title: "Dashboard Redesign",
          name: "Product Updates",
          date: "Oct 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 4,
          title: "API Improvements",
          name: "Product Updates",
          date: "Oct 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 5,
          title: "Performance Boost",
          name: "Product Updates",
          date: "Sep 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 6,
          title: "New Integration",
          name: "Product Updates",
          date: "Sep 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
      ],
    },
    {
      name: "Reflect Workflow",
      images: [
        {
          id: 1,
          title: "Note-taking Tips",
          name: "Reflect Workflows",
          date: "Nov 14, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 2,
          title: "Organization Guide",
          name: "Reflect Workflows",
          date: "Nov 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 3,
          title: "Team Collaboration",
          name: "Reflect Workflows",
          date: "Oct 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 4,
          title: "Keyboard Shortcuts",
          name: "Reflect Workflows",
          date: "Oct 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 5,
          title: "Templates",
          name: "Reflect Workflows",
          date: "Sep 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 6,
          title: "Advanced Features",
          name: "Reflect Workflows",
          date: "Sep 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
      ],
    },
    {
      name: "Toolshed Interviews",
      images: [
        {
          id: 1,
          title: "Founder Story",
          name: "Toolshed Interviews",
          date: "Nov 14, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 2,
          title: "Developer Insights",
          name: "Toolshed Interviews",
          date: "Nov 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 3,
          title: "Designer Workflow",
          name: "Toolshed Interviews",
          date: "Oct 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 4,
          title: "Product Manager",
          name: "Toolshed Interviews",
          date: "Oct 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 5,
          title: "Marketing Lead",
          name: "Toolshed Interviews",
          date: "Sep 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 6,
          title: "CEO Interview",
          name: "Toolshed Interviews",
          date: "Sep 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
      ],
    },
    {
      name: "Articles",
      images: [
        {
          id: 1,
          title: "Note-taking Science",
          name: "Articles",
          date: "Nov 14, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 2,
          title: "Productivity Hacks",
          name: "Articles",
          date: "Nov 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 3,
          title: "Digital Organization",
          name: "Articles",
          date: "Oct 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 4,
          title: "Mind Mapping",
          name: "Articles",
          date: "Oct 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 5,
          title: "Team Knowledge",
          name: "Articles",
          date: "Sep 15, 2023",
          description: "This product is very good",
          url: Frame,
        },
        {
          id: 6,
          title: "Creative Thinking",
          name: "Articles",
          date: "Sep 1, 2023",
          description: "This product is very good",
          url: Frame,
        },
      ],
    },
  ];

  return (
    <Paper elevation={0} sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", bgcolor: "rgba(8,6,36,1)" }}>
      <AppBar
        position="static"

        color="primary"
        elevation={0}
        sx={{ userSelect: "none", }}
      >
        <Toolbar sx={{ bgcolor: "rgba(8,6,36,1)", color: "white", }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              px: 6,
              "& .MuiTab-root": {
                color: "white",
                fontSize: "0.875rem",
                minWidth: "unset",
                px: 2,
                py: 1.5,

                textTransform: "capitalize",
                transition: "background-color 0.3s ease",
                "&::first-letter": {
                  fontSize: "1rem",
                  fontWeight: "bold",
                },
                "&.Mui-selected": {
                  color: "white",
                  bgcolor: "#1E3A8A",
                  borderRadius: "30px",
                },
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {categories.map((category, index) => (
              <Tab
                key={index}
                label={category.name}
                sx={{
                  "&::first-letter": {
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                  },
                }}
              />
            ))}
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={3} sx={{ justifyContent: "center" }}>

          {categories[value].images.slice(0, visibleItems).map((image) => (
            <Grid item xs={12} sm={6} md={4} key={image.id}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: "336px", // 👈 Responsive width
                  height: "auto",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: 3,
                  overflow: "hidden",
                  mx: "auto", // 👈 Center card horizontally
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={image.url}
                  alt={image.title}
                  sx={{
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <Stack spacing={1} p={2}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontWeight: "medium",
                        backgroundColor: "#1E40AF",
                        color: "white",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 12,
                      }}
                    >
                      {image.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {image.date}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: "medium" }}>
                    {image.description}
                  </Typography>
                </Stack>
              </Card>
            </Grid>
          ))}
        </Grid>

        {categories[value].images.length > visibleItems && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <Button
              variant="contained"
              onClick={handleLoadMore}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: "medium",
                backgroundColor: "#1E40AF",
                "&:hover": {
                  backgroundColor: "#1E3A8A",
                },
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default AllTags