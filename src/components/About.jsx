import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython } from 'react-icons/fa'
import { SiMongodb, SiExpress, SiDjango } from 'react-icons/si'
import { BiCodeCurly } from 'react-icons/bi'
import '../styling/About.css'


export const About = () => {
    return (
        <div className='About' id="About">
            <h1 className='skill-heading'>Skills</h1>
            <Timeline position="alternate" style={{paddingBottom:'20px'}}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            <Card sx={{ minWidth: 200}}>
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: '500', fontSize: '1.5rem' }}>
                                        Frontend Technologies
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '1rem', color: 'black', paddingTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginLeft: '40%' }}>
                                        <span > <FaHtml5 size={15} style={{ marginRight: '10px' }} />HTML</span>
                                        <span><FaCss3Alt size={15} style={{ marginRight: '10px' }} />CSS</span>
                                        <span><FaJsSquare size={15} style={{ marginRight: '10px' }} />JavaScript</span>
                                        <span><FaReact size={15} style={{ marginRight: '10px' }} />ReactJS</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            <Card sx={{ minWidth: 200 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: '500', fontSize: '1.5rem' }}>
                                        Backend Technologies
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '1rem', color: 'black', paddingTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginLeft: '40%' }}>
                                        <span > <FaNodeJs size={15} style={{ marginRight: '10px' }} />NodeJS</span>
                                        <span><SiExpress size={15} style={{ marginRight: '10px' }} />ExpressJS</span>
                                        <span><SiMongodb size={15} style={{ marginRight: '10px' }} />MongoDB</span>
                                        <span><SiDjango size={15} style={{ marginRight: '10px' }} />Django</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Typography variant="h6" component="span">
                            <Card sx={{ minWidth: 200 }}>
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: '500', fontSize: '1.5rem' }}>
                                        Programming Languages
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: 'center', fontSize: '1rem', color: 'black', paddingTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%', marginLeft: '40%' }}>
                                        <span > <BiCodeCurly size={15} style={{ marginRight: '10px' }} />C Programming</span>
                                        <span><BiCodeCurly size={15} style={{ marginRight: '10px' }} />C++</span>
                                        <span><FaPython size={15} style={{ marginRight: '10px' }} />Python</span>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}
