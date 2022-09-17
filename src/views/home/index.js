import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "../../components/button";
import { useNavigate, useLocation } from "react-router-dom";
import ArticleCard from "../../components/articleCard";
import PaginationRounded from "../../components/pagination";
import Input from "../../components/forms/input";
import VoteButton from "../../components/button/voteButton";
import Title from "../../components/title";

const Index = () => {
  const [artikel, setArtikel] = useState([]);
  const [artikelPagination, setArtikelPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [isSortDown, setIsSortDown] = useState(false);
  const [isSortUp, setIsSortUp] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [maxContent, setMaxContent] = useState(20);
  const [count, setCount] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setArtikel(location.state);
  }, [location]);

  useEffect(() => {
    setNewPagination(artikel);
  }, [page, artikel]);

  useEffect(() => {
    if (searchText !== "") {
      let result = [];
      artikel.map((item, index) => {
        if (
          item.judul
            .toLocaleLowerCase()
            .includes(searchText.toLocaleLowerCase())
        ) {
          result.push(item);
        }
      });
      setNewPagination(result);
    } else {
      setCount(20);
      setNewPagination(artikel);
    }
  }, [searchText]);

  const votePost = (index, type) => {
    let newArtikel = artikel;
    if (type === "up") {
      newArtikel[index].upvote++;
    } else {
      newArtikel[index].downvote++;
    }
    setArtikel([...newArtikel]);
  };

  const sortVote = (type) => {
    let newArtikel = artikel;
    if (type === "down") {
      setIsSortDown(true);
      setIsSortUp(false);
      newArtikel.sort((a, b) => parseFloat(a.upvote) - parseFloat(b.upvote));
    } else {
      setIsSortDown(false);
      setIsSortUp(true);
      newArtikel.sort((a, b) => parseFloat(b.upvote) - parseFloat(a.upvote));
    }
    setArtikel([...newArtikel]);
  };

  const handlePageClick = (event, val) => {
    setPage(val);
  };

  const setNewPagination = (list) => {
    let newArtikel = [];
    list?.map((item, index) => {
      if (index === 0 && index >= page - 1) {
        newArtikel.push(item);
      } else if (
        index <= maxContent * page - 1 &&
        index > (page - 1) * maxContent - 1
      ) {
        newArtikel.push(item);
      }
    });
    setCount(
      list?.length > 0 && maxContent > 0
        ? Math.ceil(list?.length / maxContent)
        : 1
    );
    setArtikelPagination([...newArtikel]);
  };

  return (
    <>
      <Card className="home-card">
        <Title text="Daftar Artikel" />

        <div className="align-right">
          {artikelPagination?.length > 0 && <></>}
          <Input
            className="form-control mt-3"
            name="judul"
            placeholder="Cari judul"
            onChange={(e) => setSearchText(e.target.value)}
          />

          <VoteButton
            className={isSortUp ? "active" : ""}
            onClick={() => sortVote("up")}
            type="up"
          />
          <VoteButton
            className={isSortDown ? "active" : ""}
            onClick={() => sortVote("down")}
            type="down"
          />

          <Button
            color="primary"
            title="Tambah"
            onClick={() => navigate("/add", { state: artikel ?? null })}
          />
        </div>
        {artikelPagination?.length > 0 ? (
          <>
            {artikelPagination?.map((item, index) => (
              <ArticleCard
                key={index}
                title={item.judul}
                date={item.tanggal}
                text={item.konten}
                onClicDownVote={() => votePost(item.index, "down")}
                onClickUpVote={() => votePost(item.index, "up")}
                upVoteAmount={item.upvote}
                downVoteAmount={item.downvote}
              ></ArticleCard>
            ))}
            <PaginationRounded
              count={count}
              page={page}
              onChange={handlePageClick}
            />
          </>
        ) : (
          <span className="text-center">Belum ada artikel</span>
        )}
      </Card>
    </>
  );
};

export default Index;
