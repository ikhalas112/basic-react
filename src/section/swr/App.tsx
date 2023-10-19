// SWR เป็น State Management ช่วยแยก UI state กับ Server state คล้ายๆ Redux

import React, { Fragment, useEffect, useState } from "react";
import TextInput from "./components/TextInput";
import Screen from "./components/Screen";
import Repository from "./components/Repository";
import SearchHelpUI from "./components/SearchHelpUI";
import Loader from "./components/Loader";
import { searchRepositories } from "./services/searchApi";
import useSWR from "swr";
// import "./index.css";

const useDebounceValue = (value: string) => {
  const [debouncedValue, setDeValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeValue(value);
    }, 300);
    return () => clearTimeout(timeout);
  }, [value]);
  return debouncedValue;
};

const useNextPage = (text: string, page: number) => {
  useSWR(text ? [text, page + 1] : null, searchRepositories);
};

export default function App() {
  const [text, setText] = useState("");
  const finalText = useDebounceValue(text);
  const { data, isValidating } = useSWR(finalText, searchRepositories);

  console.log(data);
  return (
    <div className="bg-black h-full w-full">
      <Screen>
        <TextInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          id="search-input"
          placeholder="Search"
        />
        {!data && !isValidating && <SearchHelpUI />}
        <div className="mx-3 pt-3">
          {!data &&
            isValidating &&
            React.Children.toArray([...Array(5).fill(<Loader />)])}
          {data &&
            data.items.map((item) => (
              <Fragment key={item.id}>
                <Repository
                  owner={{
                    name: item.owner.login,
                    avatar: item.owner.avatar_url,
                  }}
                  repoUrl={item.url}
                  starCount={item.stargazers_count}
                  title={item.full_name}
                  homepageUrl={item.homepage!}
                  language={item.language!}
                />
                <div className="my-3" />
              </Fragment>
            ))}
        </div>
      </Screen>
    </div>
  );
}
