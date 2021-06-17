import { FC, useState } from "react";
import FadeIn from "react-fade-in";
import { MainNav } from "../../components/Navigationbar";
import { NavModal } from "../../components/NavModal";
import { useMyTickets } from "../../hooks/query/useFetchTickets";
import { Loader } from "../../components/Loader";
import { TicketsCard } from "../../components/TicketsCard";

interface MyTicketsProps {}

const MyTickets: FC<MyTicketsProps> = () => {
  const [showFullScreenModal, setShowFullScreenModal] =
    useState<boolean>(false);
  const openFullScreenModal = (): void => {
    setShowFullScreenModal(true);
  };
  const closeFullScreenModal = (): void => {
    setShowFullScreenModal(false);
  };

  const { loading, data } = useMyTickets();
  if (loading) return <Loader />;

  return (
    <div className="tickets">
      {showFullScreenModal ? (
        <FadeIn>
          {" "}
          <NavModal closeNavModal={closeFullScreenModal} />
        </FadeIn>
      ) : (
        <>
          <MainNav openFullScreenModal={openFullScreenModal} />
          <FadeIn>
            <div className="body container">
              <div className="page-head">
                <h1>My Tickets</h1>
              </div>
              <TicketsCard>
                <div></div>
              </TicketsCard>
            </div>
          </FadeIn>
        </>
      )}
    </div>
  );
};

export default MyTickets;
