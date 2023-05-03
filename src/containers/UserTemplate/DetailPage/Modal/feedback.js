import React from 'react'

export default function Feedback() {
  return (
    <div className="card__feedback-ctn">
        <div className='feedback__left'>
            <h5>Đánh giá tổng thể: </h5>
            <div className='assume_ctn'>
            <div className='symbol_fb'>
                <div className='symbol_fb-ctn'>
                    <p>4/5</p>
                </div>
            </div>
            <div className='descrip_fb'>
                <h6>Tuyệt vời</h6>
                <p>145 bài đánh giá</p>
            </div>
            </div>
            <h5 style={{marginTop: "30px"}}>Thống kê: </h5>
            <div className='progress_ctn'>
            <div className='progress_head1'>
                <p>Độ sạch sẽ</p>
            </div>
            <div className='progress_line1'>
                <div className="progress-bar">
                    <div className="progress" style={{width: "80%"}}></div>
                </div>
                <p>4,3</p>
            </div>
            </div>
            <div className='progress_ctn'>
            <div className='progress_head1'>
                <p>Tiện nghi</p>
            </div>
            <div className='progress_line1'>
                <div className="progress-bar">
                    <div className="progress" style={{width: "50%"}}></div>
                </div>
                <p>3,0</p>
            </div>
            </div>
            <div className='progress_ctn'>
            <div className='progress_head1'>
                <p>Vị trí</p>
            </div>
            <div className='progress_line1'>
                <div className="progress-bar">
                    <div className="progress" style={{width: "40%"}}></div>
                </div>
                <p>4,0</p>
            </div>
            </div>
        </div>
        <div className='feedback__right'>
            <h5>Tất cả các bình luận:</h5> <p>(12 comments)</p>
            <div className='comment_item'>
                <div className='comment_infor'>
                    <div className='comment_img'>
                        <img src='https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-1/344316728_205659308895856_52766144340018703_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=kE_0vm-I1MYAX9pqlD6&_nc_ht=scontent.fsgn3-1.fna&oh=00_AfB4q9r_Hcl7Ew1PnF0e1uTmw6HIiUM3u2HYOVr3Waz_jg&oe=64577AA7'/>
                    </div>
                </div>
                <div className='comment_detail'>
                    <div className='comment_detail-heading'>
                        <div className='user__name'>Diệp Vũ</div>
                        <div className='user__rate'>Rất tốt - 5,0</div>
                    </div>
                    <p>05/03/2023 at 16:04PM</p>
                    <div className='comment_context'>Phòng họp sạch sẽ và thoáng mát, tuyệt vời ạ</div>
                </div>

            </div>
            <div className='comment_item'>
                <div className='comment_infor'>
                    <div className='comment_img'>
                        <img src='https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg'/>
                    </div>
                </div>
                <div className='comment_detail'>
                    <div className='comment_detail-heading'>
                        <div className='user__name'>Johnny Long</div>
                        <div className='user__rate'>Vừa phải - 3,0</div>
                    </div>
                    <p>05/03/2023 at 19:04PM</p>
                    <div className='comment_context'>Phòng thơm tho, ngăn nắp ạ</div>
                </div>

            </div>
            <div className='comment_item'>
                <div className='comment_infor'>
                    <div className='comment_img'>
                        <img src='https://chimgogo.com/wp-content/uploads/2021/05/Pug-Feature-e1620301801946.jpg'/>
                    </div>
                </div>
                <div className='comment_detail'>
                    <div className='comment_detail-heading'>
                        <div className='user__name'>Emiri Suzuhara</div>
                        <div className='user__rate'>Tạm ổn - 4,0</div>
                    </div>
                    <p>05/03/2023 at 15:04PM</p>
                    <div className='comment_context'>Nhân viên vô cùng nhiệt tình và chu đáo</div>
                </div>

            </div>

            <div className='feedback_readmore'>
                <button className='btn__read-more'>Read More</button>
            </div>
        </div>
    </div>
  )
}
