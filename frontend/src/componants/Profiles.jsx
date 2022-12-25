import {
  Avatar,
  Box,
  Heading,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../css/style.module.css";
import { filterApi } from "../redux/action";

const Profiles = () => {
  const Data = useSelector((state) => state.Data);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    let data = e.target.value;
    dispatch(filterApi(data));
  };

  return (
    <>
      <div className={styles.details}>
        <Heading textAlign={"center"} fontSize="25px" mt={"20px"} color="teal">
          User Details Page
        </Heading>
        <Box>
          <Select
            onChange={(e) => handleChange(e)}
            size={"sm"}
            w="10%"
            variant="outline"
            placeholder="Gender"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>
        </Box>
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>Avtar</Th>
                <Th>Name</Th>
                <Th>Gender</Th>
                <Th>Age</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Location</Th>
                <Th>Nat</Th>
              </Tr>
            </Thead>
            {Data &&
              Data.map((el) => (
                <Tbody>
                  <Tr key={el._id}>
                    <Td>
                      <Avatar src={el.picture} />
                    </Td>
                    <Td>{`${el.first} ${el.last}`}</Td>
                    <Td>{el.gender}</Td>
                    <Td>{el.age}</Td>
                    <Td>{el.email}</Td>
                    <Td>{el.phone}</Td>
                    <Td>{el.location}</Td>
                    <Td>{el.nat}</Td>
                  </Tr>
                </Tbody>
              ))}
          </Table>
        </TableContainer>
        <Tfoot>
          <Tr>
            {/* {Pages.forEach((el, i) => (
              <Th>
                <Button>{i}</Button>
              </Th>
            ))} */}
          </Tr>
        </Tfoot>
      </div>
    </>
  );
};

export default Profiles;
