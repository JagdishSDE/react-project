import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ course, likedCourses, setLikedCourses }) => {

    function clickHandler() {
        // LOGIC
        if (likedCourses.includes(course.id)) {
            // pehle se liked hai
            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id)));
            toast.warning("Like removed");
        }
        else {
            // this course is not liked before
            // we need to insert this course in liked courses
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]);
            }
            else {
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }

    return (
        <div className=" w-[300px]
  bg-cardBg
  rounded-md
  overflow-hidden
  border border-slate-700
  shadow-lg">
            <div className="relative">
                <img src={course.image.url} />

                <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center bottom-[-12px]">
                    <button onClick={clickHandler}>
                        {
                            !likedCourses.includes(course.id) ?
                                (<FcLikePlaceholder fontSize="1.75rem" />) :
                                (<FcLike fontSize="1.75rem" />)
                        }
                    </button>
                </div>
            </div>

            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">
                    {course.title}
                </p>

                <p className="mt-2 text-white">
                    {
                        course.description.length > 100
                            ? course.description.substr(0, 100) + "..."
                            : course.description
                    }
                </p>
            </div>
        </div>
    );
};

export default Card;