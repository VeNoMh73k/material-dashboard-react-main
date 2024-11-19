/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

function createDynamicColumns(headerNames) {
    return [
      { Header: "Name", accessor: "user", width: "20%", align: "left" },
      { Header: headerNames.functionHeader, accessor: "function", align: "left" },
      { Header: headerNames.statusHeader, accessor: "status", align: "center" },
      { Header: headerNames.employedHeader, accessor: "employed", align: "center" },
      { Header: headerNames.productNae, accessor: "product", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ];
  }


  const User = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );


  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  export default function data() {
    // Example object to dynamically change header names
    const headerNames = {
      functionHeader: "Role",
      statusHeader: "Status",
      employedHeader: "Date Employed",
      productNae: "Product"
      
    };

    const columns = createDynamicColumns(headerNames);
    const rows = [
        {
          user: <User image={team2} name="John Michael" email="john@creative-tim.com" />,
          function: <Job title="Manager" description="Organization" />,
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
            </MDBox>
          ),
          employed: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              23/04/18
            </MDTypography>
          ),
          productNae: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              2
            </MDTypography>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              Edit
            </MDTypography>
          ),
          
        },
        {
          user: <User image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
          function: <Job title="Programator" description="Developer" />,
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
            </MDBox>
          ),
          employed: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              11/01/19
            </MDTypography>
          ),
          productNae: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              2
            </MDTypography>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              Edit
            </MDTypography>
          ),
        },
        {
          user: <User image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />,
          function: <Job title="Executive" description="Projects" />,
          status: (
            <MDBox ml={-1}>
              <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
            </MDBox>
          ),
          employed: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              19/09/17
            </MDTypography>
          ),
          productNae: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              2
            </MDTypography>
          ),
          action: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              Edit
            </MDTypography>
          ),
        },
        // Additional rows...
      ];
    
    return { columns, rows };
    
}
