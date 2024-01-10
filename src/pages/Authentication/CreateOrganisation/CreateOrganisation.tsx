import { useState, useEffect } from "react";
import {
  Box,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useMediaQuery,
  Grid,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Formik, Form, Field } from "formik";
import CustomInput from "../../../config/component/CustomInput/CustomInput";
import { OrganisationCreateValidation } from "../utils/validation";
import store from "../../../store/store";
import { authentication } from "../../../config/constant/routes";
import debounce from "lodash/debounce";

const CreateOrganisation = observer(() => {
  const [showError, setShowError] = useState(false);
  const [isBelowMd] = useMediaQuery("(max-width: md)");
  const [organisationError, setOrganisationError] = useState("");
  const { token } = useParams();
  const {
    auth: { openNotification, createOrganisation },
    Organisation: { filterOrganisation },
  } = store;
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const debouncedSearch = debounce((value) => {
      filterOrganisation(value)
        .then(() => {
          setOrganisationError("");
        })
        .catch((err) => {
          setOrganisationError(err.message);
        });
    }, 1500);

    debouncedSearch(searchValue);

    // Cleanup the debounced function on unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [searchValue, filterOrganisation]);

  const handleSearchChange = (e: any) => {
    const value = e.target.value;
    setSearchValue(value);
  };

  return (
    <Box
     
      bg={useColorModeValue("", "gray.800")}
    >
      <Stack
        spacing={8}
        mx="auto"
        maxW="lg"
        py={12}
        px={2}
        minW={isBelowMd ? "100%" : "30%"}
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Create the Organisation</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Link color={"blue.400"}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              company_name: "",
              username: "",
              password: "",
              remember_me: false,
              token: token,
            }}
            validationSchema={OrganisationCreateValidation}
            onSubmit={(values, { setSubmitting }) => {
              if (!organisationError) {
                createOrganisation(values)
                  .then((data) => {
                    openNotification({
                      title: "Create Success",
                      message: data.message,
                      type: "success",
                    });
                    navigate(authentication.login);
                  })
                  .catch((error) => {
                    openNotification({
                      title: "Create Failed",
                      message: error?.message,
                      type: "error",
                    });
                  })
                  .finally(() => {
                    setSubmitting(false);
                  });
              } else {
                setSubmitting(false);
              }
            }}
          >
            {({ handleSubmit, handleChange, errors, values, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                  <Grid gridTemplateColumns={{base : '1fr', md : '1fr 1fr'}} gap={2}>
                  <CustomInput
                    type="text"
                    name="first_name"
                    label="First Name"
                    placeholder="Enter the First Name"
                    required={true}
                    error={errors.first_name}
                    onChange={handleChange}
                    value={values.first_name}
                    showError={showError}
                  />
                  <CustomInput
                    type="text"
                    name="last_name"
                    label="Last Name"
                    placeholder="Enter the Last Name"
                    required={true}
                    error={errors.last_name}
                    onChange={handleChange}
                    value={values.last_name}
                    showError={showError}
                  />
                  <CustomInput
                    type="text"
                    name="username"
                    label="Email"
                    placeholder="Enter the email"
                    required={true}
                    error={errors.username}
                    onChange={handleChange}
                    value={values.username}
                    showError={showError}
                  />
                  <CustomInput
                    type="text"
                    name="company_name"
                    label="Organisation Name"
                    placeholder="Enter the Organisation Name"
                    required={true}
                    error={errors.company_name || organisationError}
                    onChange={(e: any) => {
                      handleSearchChange(e);
                      handleChange(e);
                    }}
                    value={values.company_name}
                    showError={showError}
                  />
                  <CustomInput
                    type="password"
                    name="password"
                    label="Password"
                    placeholder="Enter the password"
                    error={errors.password}
                    onChange={handleChange}
                    value={values.password}
                    showError={showError}
                  />
                  </Grid>
                  <Stack spacing={10} mt={5}>
                    <Stack
                      direction={{ base: "column", sm: "row" }}
                      align={"start"}
                      justify={"space-between"}
                    >
                      <Field as={Checkbox} name="remember_me">
                        Remember me
                      </Field>
                      <Link
                        color={"blue.400"}
                        onClick={() => navigate(authentication.forgotPassword)}
                      >
                        Forgot password?
                      </Link>
                    </Stack>
                    <Button
                      disabled
                      type="submit"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      isLoading={isSubmitting}
                      onClick={() => {
                        setShowError(true);
                      }}
                    >
                      Sign in
                    </Button>
                  </Stack>
              </Form>
            )}
          </Formik>
        </Box>
      </Stack>
    </Box>
  );
});

export default CreateOrganisation;
